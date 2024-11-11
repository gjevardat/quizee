'use client';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as Slider from '@radix-ui/react-slider';
import { ChevronUp, ChevronDown, Dices } from 'lucide-react';
import { QuizState } from './IrregularVerbsBoard';

interface SelectionToolbarProps {
  onClearSelection: () => void;
  onSelectRandom: (count: number) => void;
  onSelectRange: (range: [number, number]) => void;
  onStartQuiz: () => void;
  onFinishQuizz: () => void;
  quizState: QuizState;
}

type SelectionMode = 'first' | 'random';

const MAX_ITEMS = 100;
const DEFAULT_RANDOM_COUNT = 10;
const DEFAULT_RANGE: [number, number] = [0, 10];

const PRESET_RANGES = [
  { label: 'First 10', value: 10 },
  { label: 'First 20', value: 20 },
  { label: 'First 30', value: 30 },
] as const;

const SelectionToolbar: React.FC<SelectionToolbarProps> = ({
  onClearSelection,
  onSelectRandom,
  onSelectRange,
  onStartQuiz,
  onFinishQuizz,
  quizState
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectionMode, setSelectionMode] = useState<SelectionMode>('first');
  const [randomCount, setRandomCount] = useState(DEFAULT_RANDOM_COUNT);
  const [range, setRange] = useState<[number, number]>(DEFAULT_RANGE);

  const handleRangeChange = (newRange: number[]) => {
    const typedRange: [number, number] = [newRange[0], newRange[1]];
    setSelectionMode('first');
    setRange(typedRange);
    onSelectRange(typedRange);
  };

  const handleRandomSelection = (count: number) => {
    const validCount = Math.min(Math.max(1, count), MAX_ITEMS);
    setSelectionMode('random');
    setRandomCount(validCount);
    onSelectRandom(validCount);
  };

  const getSelectionText = () => {
    if (selectionMode === 'first') {
      return `Selected verbs ${range[0]} to ${range[1]}`;
    }
    return `Random ${randomCount} verbs`;
  };

  const handleClearSelection = () => {
    onClearSelection();
    setSelectionMode('first');
    setRange(DEFAULT_RANGE);
    setIsOpen(false);
  };

  const renderRangeButtons = () => (
    <div className="grid grid-cols-3 gap-2 mb-3">
      {PRESET_RANGES.map(({ label, value }) => (
        <Button 
          key={value}
          variant={selectionMode === 'first' && range[1] === value ? 'default' : 'outline'}
          size="sm"
          onClick={() => handleRangeChange([0, value])}
        >
          {label}
        </Button>
      ))}
    </div>
  );

  const renderRandomButtons = () => (
    <div className="grid grid-cols-3 gap-2 mb-3">
      {PRESET_RANGES.map(({ value }) => (
        <Button 
          key={value}
          variant={selectionMode === 'random' && randomCount === value ? 'default' : 'outline'}
          size="sm"
          onClick={() => handleRandomSelection(value)}
        >
          Random {value}
        </Button>
      ))}
    </div>
  );

  return (
    <div className="relative">
      <Button
        variant="outline"
        className="w-full justify-between"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <span>{getSelectionText()}</span>
        {isOpen ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
      </Button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-background border rounded-lg shadow-lg">
          <div className="p-4 space-y-4">
            {/* Range Selection */}
            <div className="p-4 border rounded-lg space-y-3">
              <Button
                variant={selectionMode === 'first' ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => {
                  setSelectionMode('first');
                  onSelectRange(range);
                }}
                type="button"
              >
                Select a range of verbs
              </Button>
              
              {renderRangeButtons()}

              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">
                  Select verbs from position {range[0]} to {range[1]}
                </div>
                <Slider.Root
                  className="relative flex h-5 touch-none select-none items-center"
                  defaultValue={DEFAULT_RANGE}
                  value={range}
                  onValueChange={handleRangeChange}
                  step={1}
                  max={MAX_ITEMS}
                  aria-label="Select range"
                >
                  <Slider.Track className="relative h-[3px] grow rounded-full bg-black">
                    <Slider.Range className="absolute h-full rounded-full bg-black" />
                  </Slider.Track>
                  <Slider.Thumb
                    className="block size-5 rounded-[10px] bg-white shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_5px] focus:shadow-blackA5 focus:outline-none"
                    aria-label="Start range"
                  />
                  <Slider.Thumb
                    className="block size-5 rounded-[10px] bg-white shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_5px] focus:shadow-blackA5 focus:outline-none"
                    aria-label="End range"
                  />
                </Slider.Root>
              </div>
            </div>

            {/* Random Selection */}
            <div className="p-4 border rounded-lg space-y-3">
              <Button
                variant={selectionMode === 'random' ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => {
                  setSelectionMode('random');
                  onSelectRandom(randomCount);
                }}
                type="button"
              >
                Random selection
              </Button>

              {renderRandomButtons()}

              <div className="flex-1">
                <div className="text-sm text-muted-foreground mb-2">
                  Select custom number of random verbs
                </div>
                <div className="flex space-x-2">
                  <Input
                    type="number"
                    value={randomCount}
                    onChange={(e) => {
                      const count = parseInt(e.target.value) || 1;
                      handleRandomSelection(count);
                    }}
                    className="w-20"
                    min="1"
                    max={MAX_ITEMS}
                    aria-label="Number of random verbs"
                  />
                  <Button 
                    variant="outline" 
                    onClick={() => handleRandomSelection(randomCount)}
                    type="button"
                    aria-label="Randomize selection"
                  >
                    <Dices className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex justify-end space-x-2 pt-2">
              <Button
                variant="outline"
                onClick={handleClearSelection}
                type="button"
              >
                Clear Selection
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Quiz Control Button */}
      <div className="mt-2">
        {quizState === 'preparing' && (
          <Button 
            onClick={onStartQuiz} 
            className="w-full"
            type="button"
          >
            Start Quiz
          </Button>
        )}
        {quizState === 'inProgress' && (
          <Button 
            onClick={onFinishQuizz} 
            className="w-full"
            type="button"
          >
            Finish Quiz
          </Button>
        )}
      </div>
    </div>
  );
};

export default SelectionToolbar;