import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Input } from "./ui/input";


const QuizCard = ({ verb, onAnswer, currentQuestionIndex }) => {
    const [answers, setAnswers] = useState({ verb: '', pastSimple: '', pastParticiple: '', frenchTranslation: '' });
    const [isChecked, setIsChecked] = useState(false);

    const handleInputChange = (field, value) => {
        setAnswers(prev => ({ ...prev, [field]: value }));
    };

    const checkAnswer = () => {
        setIsChecked(true);
        onAnswer(answers, verb);
    };

   
    useEffect(() => {
        // Choose a random field to pre-fill
        setIsChecked(false)
        setAnswers({ verb: '', pastSimple: '', pastParticiple: '', frenchTranslation: '' });
        const fields = Object.keys(verb);
        const randomField = fields[Math.floor(Math.random() * fields.length)];
        setAnswers(prev => ({ ...prev, [randomField]: verb[randomField] }));
    }, [verb]);

    return (
        <Card className="w-full max-w-md mx-auto my-4">
            <CardHeader className="text-lg font-bold">Quiz Question {currentQuestionIndex}</CardHeader>
            <CardContent >
                {Object.keys(answers).map((field) => (
                    <div key={field} className="mb-2">
                        <label className="block text-sm font-medium text-gray-700">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                        <Input
                            type="text"
                            value={answers[field]}
                            onChange={(e) => {handleInputChange(field, e.target.value); setIsChecked(false)}}
                            className={isChecked ? (answers[field] === verb[field] ? 'border-green-500 bg-green-100' : 'border-red-500 bg-red-100') : ''}
                        />
                    </div>
                ))}
                <Button  onClick={checkAnswer}>Check Answer</Button>
           
            </CardContent>
        </Card>
    );
};

export default QuizCard