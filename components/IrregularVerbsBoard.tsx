'use client'
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { VerbType } from '@/app/page';
import CustomToolbar from './SelectionToolbar';
import { Label } from './ui/label';
import isEqual from 'lodash/isEqual';


export type VerbWithCorrect = VerbType & {
  correct: boolean;
};


const VerbsTable = ({ verbs }: { verbs: VerbType[] }) => {


  const [verbsTable, setVerbsTable] = useState<VerbType[]>(verbs);
  const [quizzStarted, setQuizzStarted] = useState<boolean>(false);
  const [quizzEvaluated, setQuizzEvaluated] = useState<boolean>(false);
  const [quizzResult,setQuizzResult] = useState<boolean>(false)
  const handleStartQuiz = () => {
    resetRandomFields();
    setQuizzStarted(true);
    setQuizzEvaluated(false);
    setQuizzResult(false);
  };

  const handleInputChange = (index: number, field: keyof VerbType, value: string) => {
    console.log(`change : ${index} ${field} ${value}`)

    setVerbsTable((prev: VerbType[]) => {

      const newVerbs: VerbType[] = [...prev];

      // Update the specific field on the specific item
      newVerbs[index] = {
        ...newVerbs[index],
        [field]: value,
      };
      return newVerbs

    }
    );
  };

  const handleSelectRandom = (count: number) => {
    setVerbsTable((prev) => prev.sort(() => 0.5 - Math.random()).slice(0, count));
  }

  const handleClearSelection = () => {
    setVerbsTable(verbs);
  }


  function resetRandomFields() {

    setVerbsTable(
      verbsTable.map(verb => {
        // List of field names
        const fields: (keyof VerbType)[] = ['verb', 'pastSimple', 'pastParticiple', 'frenchTranslation'];

        // Randomly choose one field to keep
        const randomField = fields[Math.floor(Math.random() * fields.length)];
        console.log("Random field for verb:", verb.verb, randomField);

        // Create a new object with only the random field kept and others reset
        return {
          index: verb.index,
          verb: randomField === 'verb' ? verb.verb : '',
          pastSimple: randomField === 'pastSimple' ? verb.pastSimple : '',
          pastParticiple: randomField === 'pastParticiple' ? verb.pastParticiple : '',
          frenchTranslation: randomField === 'frenchTranslation' ? verb.frenchTranslation : ''
        };
      }));

  }

  function handleFinishQuiz(): void {
    setQuizzEvaluated(true)
    const result:boolean =verbsTable.every((verb) => {
      console.log(`answer ${verb.index}:${verb.verb} truth ${verbs.find(v => v.index == verb.index)?.verb}`);
      return isEqual(verb,verbs[verb.index]);

    });
    setQuizzResult(result);

  }


  return (
    <Card className="w-full max-w-5xl mx-auto flex flex-col h-[calc(100vh-200px)]">
      <CardHeader>
        <CardTitle>Verbes irréguliers en anglais</CardTitle>
       
          <>
            <CustomToolbar
              onClearSelection={handleClearSelection}
              onSelectRandom={handleSelectRandom}
            />
            <Button onClick={handleStartQuiz}>Start Quiz with {verbsTable.length} verbs</Button>
          </>


      </CardHeader>
      <CardContent className="flex-grow overflow-hidden">
        <ScrollArea className="h-full">

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Id</TableHead>
                <TableHead>Verb</TableHead>
                <TableHead>Past Simple</TableHead>
                <TableHead>Past Participle</TableHead>
                <TableHead>French Translation</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {verbsTable.map((verb: VerbType, index: number) => (


                <TableRow key={index}>
                  <TableCell>


                    <Input
                      value={verbsTable[index].index}
                      readOnly={true}
                    />

                  </TableCell>
                  <TableCell>


                    <Input
                      value={verbsTable[index].verb}
                      onChange={(e) => handleInputChange(index, 'verb', e.target.value)}
                    />

                  </TableCell>
                  <TableCell>
                    <Input
                      value={verbsTable[index].pastSimple}
                      onChange={(e) => handleInputChange(index, 'pastSimple', e.target.value)}
                      disabled={quizzStarted == true ? false : true}
                      className={quizzStarted == false ? "disabled:opacity-100 disabled:cursor-default" : ""}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      value={verbsTable[index].pastParticiple}
                      onChange={(e) => handleInputChange(index, 'pastParticiple', e.target.value)}
                      disabled={quizzStarted == true ? false : true}
                      className={quizzStarted == false ? "disabled:opacity-100 disabled:cursor-default" : ""}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      value={verbsTable[index].frenchTranslation}
                      onChange={(e) => handleInputChange(index, 'frenchTranslation', e.target.value)}
                      disabled={quizzStarted == true ? false : true}
                      className={quizzStarted == false ? "disabled:opacity-100 disabled:cursor-default" : ""}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
      {quizzStarted &&
        <CardFooter>
          <Button onClick={handleFinishQuiz}> Finish Quiz</Button>
          <Label> {quizzEvaluated ? quizzResult ? "Success" : "Failure" : ""}</Label>
        </CardFooter>}
    </Card>
  );
};

export default VerbsTable;


