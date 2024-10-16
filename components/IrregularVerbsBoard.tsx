'use client'
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { VerbType } from '@/app/page';



const VerbsTable = ({verbs}:{verbs:VerbType[]}) => {
  const [irregularVerbs, setIrregularVerbs] = useState<VerbType[]>(verbs);
  const [selectedVerbs, setSelectedVerbs] = useState<VerbType[]>([]);
  const [editingId, setEditingId] = useState(null);

  const handleCheckboxChange = (id) => {
    setSelectedVerbs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleStartQuiz = () => {
   // const quizVerbs = irregularVerbs.filter(verb => selectedVerbs[verb.verb]);
   // console.log('Starting quiz with selected verbs:', quizVerbs);
    // Here you would typically pass these verbs to your quiz component or start the quiz
  };

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleSave = (id) => {
    setEditingId(null);
  };

  const handleInputChange = (id, field, value) => {
    setIrregularVerbs(prevVerbs =>
      prevVerbs.map(verb =>
        verb.verb === id ? { ...verb, [field]: value } : verb
      )
    );
  };

    const selectRandom= () =>{
        setSelectedVerbs(irregularVerbs.sort(() => 0.5 - Math.random()).slice(0,10));
    }

  return (
    <Card className="w-full max-w-5xl mx-auto">
      <CardHeader>
        <CardTitle>Editable Irregular Verbs</CardTitle>
        <Button onClick={selectRandom}>10 random</Button>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[calc(100vh-300px)] min-h-[400px]">
          <Table>
            <TableCaption>Edit and select verbs for your quiz</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">Select</TableHead>
                <TableHead>Verb</TableHead>
                <TableHead>Past Simple</TableHead>
                <TableHead>Past Participle</TableHead>
                <TableHead>French Translation</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {irregularVerbs.map((verb:VerbType) => (
                <TableRow key={verb.verb}>
                  <TableCell>
                    <Checkbox
                      checked={selectedVerbs[verb.verb] || false}
                      onCheckedChange={() => handleCheckboxChange(verb.verb)}
                    />
                  </TableCell>
                  <TableCell>
                    {editingId === verb.verb ? (
                      <Input
                        value={verb.verb}
                        onChange={(e) => handleInputChange(verb.verb, 'verb', e.target.value)}
                      />
                    ) : (
                      verb.verb
                    )}
                  </TableCell>
                  <TableCell>
                    {editingId === verb.verb ? (
                      <Input
                        value={verb.pastSimple}
                        onChange={(e) => handleInputChange(verb.verb, 'pastSimple', e.target.value)}
                      />
                    ) : (
                      verb.pastSimple
                    )}
                  </TableCell>
                  <TableCell>
                    {editingId === verb.verb ? (
                      <Input
                        value={verb.pastParticiple}
                        onChange={(e) => handleInputChange(verb.verb, 'pastParticiple', e.target.value)}
                      />
                    ) : (
                      verb.pastParticiple
                    )}
                  </TableCell>
                  <TableCell>
                    {editingId === verb.verb ? (
                      <Input
                        value={verb.frenchTranslation}
                        onChange={(e) => handleInputChange(verb.verb, 'frenchTranslation', e.target.value)}
                      />
                    ) : (
                      verb.frenchTranslation
                    )}
                  </TableCell>
                  <TableCell>
                    {editingId === verb.verb ? (
                      <Button onClick={() => handleSave(verb.verb)}>Save</Button>
                    ) : (
                      <Button onClick={() => handleEdit(verb.verb)}>Edit</Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div>{Object.values(selectedVerbs).filter(Boolean).length} verbs selected</div>
        <Button onClick={handleStartQuiz}>Start Quiz</Button>
      </CardFooter>
    </Card>
  );
};

export default VerbsTable;