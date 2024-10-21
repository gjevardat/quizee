'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import QuizCard from '@/components/QuizCard';
import { VerbType } from '@/app/page';



type QuizResultProps = {
  score:number,
  totalQuestions:number,
  restartQuiz: ()=>void
}
const QuizResult = ({ score, totalQuestions, restartQuiz }:QuizResultProps) => (
  <Card className="w-full max-w-md mx-auto my-4">
    <CardHeader className="text-lg font-bold">Quiz Result</CardHeader>
    <CardContent>
      <p>Your score: {score} out of {totalQuestions}</p>
      <p>Percentage: {((score / totalQuestions) * 100).toFixed(2)}%</p>
    </CardContent>
    <CardFooter>
    <Button onClick={restartQuiz}>Retry Quiz</Button>
    </CardFooter>
  </Card>
);

const QuizzApp = ({verbs}:{verbs:VerbType[]}) => {
  const [selectedVerbs, setSelectedVerbs] = useState<VerbType[]>([]);
  const [quizQuestions, setQuizQuestions] = useState<VerbType[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleVerbSelection = (verb:VerbType) => {
    setSelectedVerbs(prev => 
      prev.includes(verb) ? prev.filter(v => v !== verb) : [...prev, verb]
    );
  };

  const startQuiz = () => {
    
      const shuffled = [...selectedVerbs].sort(() => 0.5 - Math.random());
      setQuizQuestions(shuffled.slice(0, selectedVerbs.length));
      setQuizStarted(true);
    
  };

  const handleAnswer = (answers:Partial<VerbType>, correctVerb:VerbType) => {
    setTimeout(() => {
      
      //a bit tricky type script typing thing. powerful !
      const isCorrect = (Object.keys(answers) as Array<keyof VerbType>).every(
        field => answers[field] === correctVerb[field]
      );
     
      if (isCorrect) setScore(prev => prev + 1);
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        setQuizComplete(true);
      }
    }, 2000);
  };

  const restartQuiz = () => {
    setSelectedVerbs([]);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizComplete(false);
    setQuizStarted(false);
    setQuizQuestions([]);
  };

  return (
    <div className="container mx-auto  max-w-md p-4">
      
      
      {!quizStarted && (
        <>
                  

          <Button onClick={startQuiz} disabled={selectedVerbs.length < 1}>
            Start Quiz
          </Button>
        </>
      )}

      {quizStarted && !quizComplete && quizQuestions.length > 0 && (
        <QuizCard
          verb={quizQuestions[currentQuestionIndex]}
          onAnswer={handleAnswer}
          currentQuestionIndex={currentQuestionIndex + 1}
          totalQuestions={selectedVerbs.length}
        />
      )}

      {quizComplete && (
        <>
          <QuizResult score={score} totalQuestions={selectedVerbs.length} restartQuiz={restartQuiz} />
        </>
      )}
    </div>
  );
};

export default QuizzApp;