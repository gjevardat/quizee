'use client'
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import QuizCard from '@/components/QuizCard';

// Sample data for irregular verbs
const irregularVerbs = [
  { verb: 'be', pastSimple: 'was/were', pastParticiple: 'been', frenchTranslation: 'être' },
  { verb: 'begin', pastSimple: 'began', pastParticiple: 'begun', frenchTranslation: 'commencer' },
  { verb: 'break', pastSimple: 'broke', pastParticiple: 'broken', frenchTranslation: 'casser' },
  { verb: 'bring', pastSimple: 'brought', pastParticiple: 'brought', frenchTranslation: 'apporter' },
  { verb: 'buy', pastSimple: 'bought', pastParticiple: 'bought', frenchTranslation: 'acheter' },
  // Add more verbs here
];



const QuizResult = ({ score, totalQuestions }) => (
  <Card className="w-full max-w-md mx-auto my-4">
    <CardHeader className="text-lg font-bold">Quiz Result</CardHeader>
    <CardContent>
      <p>Your score: {score} out of {totalQuestions}</p>
      <p>Percentage: {((score / totalQuestions) * 100).toFixed(2)}%</p>
    </CardContent>
  </Card>
);


const App = () => {
  const [selectedVerbs, setSelectedVerbs] = useState(irregularVerbs);
  const [numQuestions, setNumQuestions] = useState(5);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  

  useEffect(() => {
    if (selectedVerbs.length > 0 && numQuestions > 0) {
      const shuffled = [...selectedVerbs].sort(() => 0.5 - Math.random());
      setQuizQuestions(shuffled.slice(0, numQuestions));
    }
  }, [selectedVerbs, numQuestions]);


  const handleAnswer = (answers, correctVerb) => {
    
    setTimeout(() => {
     const isCorrect = Object.keys(answers).every(field => answers[field] === correctVerb[field]);
    if (isCorrect) setScore(prev => prev + 1);
    if( !isCorrect) return;
     if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setQuizComplete(true);
  
    } 
   },2000)
   
    
  };



  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizComplete(false);
    const shuffled = [...selectedVerbs].sort(() => 0.5 - Math.random());
    setQuizQuestions(shuffled.slice(0, numQuestions));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">English Irregular Verbs Quiz</h1>
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Select Verbs</h2>
        {irregularVerbs.map(verb => (
          <Button
            key={verb.verb}
            onClick={() => handleVerbSelection(verb)}
            className={`m-1 ${selectedVerbs.includes(verb) ? 'bg-blue-500' : 'bg-gray-300'}`}
          >
            {verb.verb}
          </Button>
        ))}
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Number of Questions</label>
        <Select value={numQuestions} onValueChange={setNumQuestions}>
          <SelectTrigger>
            <SelectValue>{numQuestions}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            {[5, 10, 15, 20].map(num => (
              <SelectItem key={num} value={num}>{num}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {!quizComplete && quizQuestions.length > 0 && (
        <QuizCard
          verb={quizQuestions[currentQuestionIndex]}
          onAnswer={handleAnswer}
          currentQuestionIndex={currentQuestionIndex+1}
        />
      )}

      {quizComplete && (
        <>
          <QuizResult score={score} totalQuestions={numQuestions} />
          <Button onClick={restartQuiz}>Retry Quiz</Button>
        </>
      )}

      
    </div>
  );
};

export default App;