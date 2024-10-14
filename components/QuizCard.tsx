import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { VerbType as VerbType } from "@/app/page";

type QuizCardProps = {
  verb: VerbType;
  onAnswer: (answers: Partial<VerbType>, correctVerb: VerbType) => void;
  currentQuestionIndex: number;
};

const QuizCard = ({ verb, onAnswer, currentQuestionIndex }: QuizCardProps) => {
  const [answers, setAnswers] = useState<Partial<VerbType>>({
    verb: "",
    pastSimple: "",
    pastParticiple: "",
    frenchTranslation: "",
  });
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (field: keyof VerbType, value: string) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  };

  const checkAnswer = () => {
    setIsChecked(true);
    onAnswer(answers, verb);
  };

  useEffect(() => {
    setIsChecked(false);
    setAnswers({ verb: "", pastSimple: "", pastParticiple: "", frenchTranslation: "" });

    const fields = Object.keys(verb) as Array<keyof VerbType>;
    const randomField = fields[Math.floor(Math.random() * fields.length)];
    setAnswers((prev) => ({ ...prev, [randomField]: verb[randomField] }));
  }, [verb]);

  return (
    <Card className="w-full max-w-md mx-auto my-4">
      <CardHeader className="text-lg font-bold">Quiz Question {currentQuestionIndex}</CardHeader>
      <CardContent>
        {Object.keys(answers).map((field) => (
          <div key={field} className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <Input
              type="text"
              value={answers[field as keyof VerbType] || ""}
              onChange={(e) => {
                handleInputChange(field as keyof VerbType, e.target.value);
                setIsChecked(false);
              }}
              className={
                isChecked
                  ? answers[field as keyof VerbType] === verb[field as keyof VerbType]
                    ? "border-green-500 bg-green-100"
                    : "border-red-500 bg-red-100"
                  : ""
              }
            />
          </div>
        ))}
        <Button onClick={checkAnswer}>Check Answer</Button>
      </CardContent>
    </Card>
  );
};

export default QuizCard;
