'use client'
import React, { useEffect, useState, useCallback } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Check, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { VerbType } from '@/app/page';
import SelectionToolbar from './SelectionToolbar';
import { isEqual } from 'lodash';

export type QuizState = 'preparing' | 'inProgress' | 'showing-results';

interface ScoreDialogProps {
  isOpen: boolean;
  score: number;
  total: number;
  onClose: () => void;
  onRetry: () => void;
}

interface VerbsTableProps {
  verbs: VerbType[];
}

const ScoreDialog: React.FC<ScoreDialogProps> = ({ 
  isOpen, 
  score, 
  total, 
  onClose, 
  onRetry 
}) => {
  const percentage = Math.round((score / total) * 100);
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Quiz Results</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4 py-6">
          <div className="text-6xl font-bold text-primary">
            {percentage}%
          </div>
          <p className="text-center text-muted-foreground">
            You got <span className="font-medium text-foreground">{score}</span> correct answers
            out of <span className="font-medium text-foreground">{total}</span> possible answers
          </p>
        </div>
        <DialogFooter className="flex gap-2">
          <Button variant="outline" onClick={onClose}>Close</Button>
          <Button onClick={onRetry}>Try Again</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const VerbsTable: React.FC<VerbsTableProps> = ({ verbs }) => {
  const [verbsTable, setVerbsTable] = useState<VerbType[]>([]);
  const [quizState, setQuizState] = useState<QuizState>('preparing');
  const [selectedRange, setSelectedRange] = useState<[number, number]>([0, 10]);
  const [showScoreDialog, setShowScoreDialog] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const handleInputChange = useCallback((index: number, field: keyof VerbType, value: string) => {
    setVerbsTable(prev => {
      const newVerbs = [...prev];
      newVerbs[index] = {
        ...newVerbs[index],
        [field]: value,
      };
      return newVerbs;
    });
  }, []);

  const handleSelectRandom = useCallback((count: number) => {
    setVerbsTable(prev => [...prev].sort(() => 0.5 - Math.random()).slice(0, count));
  }, []);

  const handleClearSelection = useCallback(() => {
    setVerbsTable(verbs);
  }, [verbs]);

  const isFieldCorrect = useCallback((verb: VerbType, field: keyof VerbType) => {
    const originalVerb = verbs.find(v => v.index === verb.index);
    if (!originalVerb) return false;
    return verb[field] === originalVerb[field];
  }, [verbs]);

  const calculateScore = useCallback(() => {
    let correct = 0;
    let total = 0;

    verbsTable.forEach((verb) => {
      total++;
        if ( isEqual(verb,verbs[verb.index]) ){
            correct++;
      }
    });

    return { correct, total };
  }, [verbsTable, isFieldCorrect]);

  const resetQuiz = useCallback(() => {
    setQuizState('preparing');
    setVerbsTable(verbs.slice(selectedRange[0], selectedRange[1]));
    setShowScoreDialog(false);
  }, [verbs, selectedRange]);

  const resetRandomFields = useCallback(() => {
    const fields: (keyof VerbType)[] = ['verb', 'pastSimple', 'pastParticiple', 'frenchTranslation'];
    
    setVerbsTable(prev =>
      prev.map(verb => {
        const randomField = fields[Math.floor(Math.random() * fields.length)];
        return {
          ...verb,
          [randomField]: ''
        };
      })
    );
  }, []);

  const handleFinishQuiz = useCallback(() => {
    const newScore = calculateScore();
    setScore(newScore);
    setQuizState('showing-results');
    setShowScoreDialog(true);
  }, [calculateScore]);

  const renderField = useCallback((verb: VerbType, field: keyof VerbType, index: number) => {
    const isCorrect = isFieldCorrect(verb, field);

    return (
      <div className="relative">
        <Input
          value={verb[field]}
          onChange={(e) => handleInputChange(index, field, e.target.value)}
          disabled={quizState !== 'inProgress'}
          className={`
            ${quizState === 'preparing' ? "disabled:opacity-100 disabled:cursor-default" : ""}
            ${quizState === 'showing-results'
              ? isCorrect
                ? "border-green-500 bg-green-50"
                : "border-red-500 bg-red-50"
              : ""
            }
          `}
        />
        {quizState === 'showing-results' && (
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
            {isCorrect ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <div className="flex items-center gap-1">
                <X className="h-4 w-4 text-red-600" />
                <span className="text-xs text-gray-600">
                  {verbs.find(v => v.index === verb.index)?.[field]}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }, [quizState, handleInputChange, isFieldCorrect, verbs]);

  useEffect(() => {
    const [start, end] = selectedRange;
    setVerbsTable(verbs.slice(start, end));
  }, [selectedRange, verbs]);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-4">
      <ScoreDialog
        isOpen={showScoreDialog}
        score={score.correct}
        total={score.total}
        onClose={() => {setShowScoreDialog(false); resetQuiz();}}
        onRetry={resetQuiz}
      />

      <Card className="w-full">
        <CardHeader>
          <SelectionToolbar
            onClearSelection={handleClearSelection}
            onSelectRandom={handleSelectRandom}
            onSelectRange={setSelectedRange}
            onStartQuiz={() => {
              resetRandomFields();
              setQuizState('inProgress');
            }}
            onFinishQuizz={handleFinishQuiz}
            quizState={quizState}
          />
        </CardHeader>
      </Card>

      <Card className="w-full h-[calc(100vh-320px)]">
        <CardContent className="h-full p-0">
          <ScrollArea className="h-full">
            <div className="p-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="bg-background sticky top-0">Verb</TableHead>
                    <TableHead className="bg-background sticky top-0">Past Simple</TableHead>
                    <TableHead className="bg-background sticky top-0">Past Participle</TableHead>
                    <TableHead className="bg-background sticky top-0">French Translation</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {verbsTable.map((verb: VerbType, index: number) => (
                    <TableRow key={`${verb.index}-${index}`}>
                      <TableCell>
                        {renderField(verb, 'verb', index)}
                      </TableCell>
                      <TableCell>
                        {renderField(verb, 'pastSimple', index)}
                      </TableCell>
                      <TableCell>
                        {renderField(verb, 'pastParticiple', index)}
                      </TableCell>
                      <TableCell>
                        {renderField(verb, 'frenchTranslation', index)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default VerbsTable;