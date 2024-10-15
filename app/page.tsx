'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import QuizCard from '@/components/QuizCard';

export type VerbType = {
  verb:string,
  pastSimple:string,
  pastParticiple:string,
  frenchTranslation:string
}
const irregularVerbs : VerbType[] =[
  { verb: 'arise', pastSimple: 'arose', pastParticiple: 'arisen', frenchTranslation: 'survenir' },
  { verb: 'awake', pastSimple: 'awoke', pastParticiple: 'awoken', frenchTranslation: 'se réveiller' },
  { verb: 'be', pastSimple: 'was/were', pastParticiple: 'been', frenchTranslation: 'être' },
  { verb: 'bear', pastSimple: 'bore', pastParticiple: 'borne', frenchTranslation: 'supporter' },
  { verb: 'beat', pastSimple: 'beat', pastParticiple: 'beaten', frenchTranslation: 'battre' },
  { verb: 'become', pastSimple: 'became', pastParticiple: 'become', frenchTranslation: 'devenir' },
  { verb: 'begin', pastSimple: 'began', pastParticiple: 'begun', frenchTranslation: 'commencer' },
  { verb: 'bend', pastSimple: 'bent', pastParticiple: 'bent', frenchTranslation: 'plier' },
  { verb: 'bet', pastSimple: 'bet', pastParticiple: 'bet', frenchTranslation: 'parier' },
  { verb: 'bind', pastSimple: 'bound', pastParticiple: 'bound', frenchTranslation: 'lier' },
  { verb: 'bite', pastSimple: 'bit', pastParticiple: 'bitten', frenchTranslation: 'mordre' },
  { verb: 'bleed', pastSimple: 'bled', pastParticiple: 'bled', frenchTranslation: 'saigner' },
  { verb: 'blow', pastSimple: 'blew', pastParticiple: 'blown', frenchTranslation: 'souffler' },
  { verb: 'break', pastSimple: 'broke', pastParticiple: 'broken', frenchTranslation: 'casser' },
  { verb: 'breed', pastSimple: 'bred', pastParticiple: 'bred', frenchTranslation: 'élever' },
  { verb: 'bring', pastSimple: 'brought', pastParticiple: 'brought', frenchTranslation: 'apporter' },
  { verb: 'broadcast', pastSimple: 'broadcast', pastParticiple: 'broadcast', frenchTranslation: 'diffuser' },
  { verb: 'build', pastSimple: 'built', pastParticiple: 'built', frenchTranslation: 'construire' },
  { verb: 'burn', pastSimple: 'burnt', pastParticiple: 'burnt', frenchTranslation: 'brûler' },
  { verb: 'buy', pastSimple: 'bought', pastParticiple: 'bought', frenchTranslation: 'acheter' },
  { verb: 'catch', pastSimple: 'caught', pastParticiple: 'caught', frenchTranslation: 'attraper' },
  { verb: 'choose', pastSimple: 'chose', pastParticiple: 'chosen', frenchTranslation: 'choisir' },
  { verb: 'come', pastSimple: 'came', pastParticiple: 'come', frenchTranslation: 'venir' },
  { verb: 'cost', pastSimple: 'cost', pastParticiple: 'cost', frenchTranslation: 'coûter' },
  { verb: 'creep', pastSimple: 'crept', pastParticiple: 'crept', frenchTranslation: 'ramper' },
  { verb: 'cut', pastSimple: 'cut', pastParticiple: 'cut', frenchTranslation: 'couper' },
  { verb: 'deal', pastSimple: 'dealt', pastParticiple: 'dealt', frenchTranslation: 'traiter' },
  { verb: 'dig', pastSimple: 'dug', pastParticiple: 'dug', frenchTranslation: 'creuser' },
  { verb: 'do', pastSimple: 'did', pastParticiple: 'done', frenchTranslation: 'faire' },
  { verb: 'draw', pastSimple: 'drew', pastParticiple: 'drawn', frenchTranslation: 'dessiner' },
  { verb: 'dream', pastSimple: 'dreamt', pastParticiple: 'dreamt', frenchTranslation: 'rêver' },
  { verb: 'drink', pastSimple: 'drank', pastParticiple: 'drunk', frenchTranslation: 'boire' },
  { verb: 'drive', pastSimple: 'drove', pastParticiple: 'driven', frenchTranslation: 'conduire' },
  { verb: 'eat', pastSimple: 'ate', pastParticiple: 'eaten', frenchTranslation: 'manger' },
  { verb: 'fall', pastSimple: 'fell', pastParticiple: 'fallen', frenchTranslation: 'tomber' },
  { verb: 'feed', pastSimple: 'fed', pastParticiple: 'fed', frenchTranslation: 'nourrir' },
  { verb: 'feel', pastSimple: 'felt', pastParticiple: 'felt', frenchTranslation: 'ressentir' },
  { verb: 'fight', pastSimple: 'fought', pastParticiple: 'fought', frenchTranslation: 'se battre' },
  { verb: 'find', pastSimple: 'found', pastParticiple: 'found', frenchTranslation: 'trouver' },
  { verb: 'fly', pastSimple: 'flew', pastParticiple: 'flown', frenchTranslation: 'voler' },
  { verb: 'forget', pastSimple: 'forgot', pastParticiple: 'forgotten', frenchTranslation: 'oublier' },
  { verb: 'forgive', pastSimple: 'forgave', pastParticiple: 'forgiven', frenchTranslation: 'pardonner' },
  { verb: 'freeze', pastSimple: 'froze', pastParticiple: 'frozen', frenchTranslation: 'geler' },
  { verb: 'get', pastSimple: 'got', pastParticiple: 'got/gotten', frenchTranslation: 'obtenir' },
  { verb: 'give', pastSimple: 'gave', pastParticiple: 'given', frenchTranslation: 'donner' },
  { verb: 'go', pastSimple: 'went', pastParticiple: 'gone', frenchTranslation: 'aller' },
  { verb: 'grow', pastSimple: 'grew', pastParticiple: 'grown', frenchTranslation: 'pousser' },
  { verb: 'hang', pastSimple: 'hung', pastParticiple: 'hung', frenchTranslation: 'pendre' },
  { verb: 'have', pastSimple: 'had', pastParticiple: 'had', frenchTranslation: 'avoir' },
  { verb: 'hear', pastSimple: 'heard', pastParticiple: 'heard', frenchTranslation: 'entendre' },
  { verb: 'hide', pastSimple: 'hid', pastParticiple: 'hidden', frenchTranslation: 'cacher' },
  { verb: 'hit', pastSimple: 'hit', pastParticiple: 'hit', frenchTranslation: 'frapper' },
  { verb: 'hold', pastSimple: 'held', pastParticiple: 'held', frenchTranslation: 'tenir' },
  { verb: 'hurt', pastSimple: 'hurt', pastParticiple: 'hurt', frenchTranslation: 'blesser' },
  { verb: 'keep', pastSimple: 'kept', pastParticiple: 'kept', frenchTranslation: 'garder' },
  { verb: 'know', pastSimple: 'knew', pastParticiple: 'known', frenchTranslation: 'savoir' },
  { verb: 'lay', pastSimple: 'laid', pastParticiple: 'laid', frenchTranslation: 'poser' },
  { verb: 'lead', pastSimple: 'led', pastParticiple: 'led', frenchTranslation: 'mener' },
  { verb: 'leave', pastSimple: 'left', pastParticiple: 'left', frenchTranslation: 'quitter' },
  { verb: 'lend', pastSimple: 'lent', pastParticiple: 'lent', frenchTranslation: 'prêter' },
  { verb: 'let', pastSimple: 'let', pastParticiple: 'let', frenchTranslation: 'laisser' },
  { verb: 'lie', pastSimple: 'lay', pastParticiple: 'lain', frenchTranslation: 's’allonger' },
  { verb: 'light', pastSimple: 'lit', pastParticiple: 'lit', frenchTranslation: 'allumer' },
  { verb: 'lose', pastSimple: 'lost', pastParticiple: 'lost', frenchTranslation: 'perdre' },
  { verb: 'make', pastSimple: 'made', pastParticiple: 'made', frenchTranslation: 'faire' },
  { verb: 'mean', pastSimple: 'meant', pastParticiple: 'meant', frenchTranslation: 'vouloir dire' },
  { verb: 'meet', pastSimple: 'met', pastParticiple: 'met', frenchTranslation: 'rencontrer' },
  { verb: 'pay', pastSimple: 'paid', pastParticiple: 'paid', frenchTranslation: 'payer' },
  { verb: 'put', pastSimple: 'put', pastParticiple: 'put', frenchTranslation: 'mettre' },
  { verb: 'read', pastSimple: 'read', pastParticiple: 'read', frenchTranslation: 'lire' },
  { verb: 'ride', pastSimple: 'rode', pastParticiple: 'ridden', frenchTranslation: 'monter' },
  { verb: 'ring', pastSimple: 'rang', pastParticiple: 'rung', frenchTranslation: 'sonner' },
  { verb: 'rise', pastSimple: 'rose', pastParticiple: 'risen', frenchTranslation: 'se lever' },
  { verb: 'run', pastSimple: 'ran', pastParticiple: 'run', frenchTranslation: 'courir' },
  { verb: 'say', pastSimple: 'said', pastParticiple: 'said', frenchTranslation: 'dire' },
  { verb: 'see', pastSimple: 'saw', pastParticiple: 'seen', frenchTranslation: 'voir' },
  { verb: 'sell', pastSimple: 'sold', pastParticiple: 'sold', frenchTranslation: 'vendre' },
  { verb: 'send', pastSimple: 'sent', pastParticiple: 'sent', frenchTranslation: 'envoyer' },
  { verb: 'set', pastSimple: 'set', pastParticiple: 'set', frenchTranslation: 'mettre' },
  { verb: 'shake', pastSimple: 'shook', pastParticiple: 'shaken', frenchTranslation: 'secouer' },
  { verb: 'shine', pastSimple: 'shone', pastParticiple: 'shone', frenchTranslation: 'briller' },
  { verb: 'shoot', pastSimple: 'shot', pastParticiple: 'shot', frenchTranslation: 'tirer' },
  { verb: 'show', pastSimple: 'showed', pastParticiple: 'shown', frenchTranslation: 'montrer' },
  { verb: 'shut', pastSimple: 'shut', pastParticiple: 'shut', frenchTranslation: 'fermer' },
  { verb: 'sing', pastSimple: 'sang', pastParticiple: 'sung', frenchTranslation: 'chanter' },
  { verb: 'sit', pastSimple: 'sat', pastParticiple: 'sat', frenchTranslation: 's’asseoir' },
  { verb: 'sleep', pastSimple: 'slept', pastParticiple: 'slept', frenchTranslation: 'dormir' },
  { verb: 'speak', pastSimple: 'spoke', pastParticiple: 'spoken', frenchTranslation: 'parler' },
  { verb: 'spend', pastSimple: 'spent', pastParticiple: 'spent', frenchTranslation: 'dépenser' },
  { verb: 'spin', pastSimple: 'spun', pastParticiple: 'spun', frenchTranslation: 'tourner' },
  { verb: 'stand', pastSimple: 'stood', pastParticiple: 'stood', frenchTranslation: 'se tenir' },
  { verb: 'steal', pastSimple: 'stole', pastParticiple: 'stolen', frenchTranslation: 'voler' },
  { verb: 'stick', pastSimple: 'stuck', pastParticiple: 'stuck', frenchTranslation: 'coller' },
  { verb: 'strike', pastSimple: 'struck', pastParticiple: 'struck', frenchTranslation: 'frapper' },
  { verb: 'swear', pastSimple: 'swore', pastParticiple: 'sworn', frenchTranslation: 'jurer' },
  { verb: 'sweep', pastSimple: 'swept', pastParticiple: 'swept', frenchTranslation: 'balayer' },
  { verb: 'swim', pastSimple: 'swam', pastParticiple: 'swum', frenchTranslation: 'nager' },
  { verb: 'swing', pastSimple: 'swung', pastParticiple: 'swung', frenchTranslation: 'se balancer' },
  { verb: 'take', pastSimple: 'took', pastParticiple: 'taken', frenchTranslation: 'prendre' },
  { verb: 'teach', pastSimple: 'taught', pastParticiple: 'taught', frenchTranslation: 'enseigner' },
  { verb: 'tear', pastSimple: 'tore', pastParticiple: 'torn', frenchTranslation: 'déchirer' },
  { verb: 'tell', pastSimple: 'told', pastParticiple: 'told', frenchTranslation: 'dire' },
  { verb: 'think', pastSimple: 'thought', pastParticiple: 'thought', frenchTranslation: 'penser' },
  { verb: 'throw', pastSimple: 'threw', pastParticiple: 'thrown', frenchTranslation: 'jeter' },
  { verb: 'understand', pastSimple: 'understood', pastParticiple: 'understood', frenchTranslation: 'comprendre' },
  { verb: 'wake', pastSimple: 'woke', pastParticiple: 'woken', frenchTranslation: 'se réveiller' },
  { verb: 'wear', pastSimple: 'wore', pastParticiple: 'worn', frenchTranslation: 'porter' },
  { verb: 'win', pastSimple: 'won', pastParticiple: 'won', frenchTranslation: 'gagner' },
  { verb: 'write', pastSimple: 'wrote', pastParticiple: 'written', frenchTranslation: 'écrire' }
]
;

type QuizResultProps = {
  score:number,
  totalQuestions:number
}
const QuizResult = ({ score, totalQuestions }:QuizResultProps) => (
  <Card className="w-full max-w-md mx-auto my-4">
    <CardHeader className="text-lg font-bold">Quiz Result</CardHeader>
    <CardContent>
      <p>Your score: {score} out of {totalQuestions}</p>
      <p>Percentage: {((score / totalQuestions) * 100).toFixed(2)}%</p>
    </CardContent>
  </Card>
);

const App = () => {
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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">English Irregular Verbs Quiz</h1>
      
      {!quizStarted && (
        <>
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
          <QuizResult score={score} totalQuestions={selectedVerbs.length} />
          <Button onClick={restartQuiz}>Retry Quiz</Button>
        </>
      )}
    </div>
  );
};

export default App;