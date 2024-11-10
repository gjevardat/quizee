import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';
import * as Slider from "@radix-ui/react-slider";

import {
  ChevronDown,
  ChevronUp,
  Dices,
  RotateCcw as RotateCcwIcon,
  Play,
  Square
} from 'lucide-react';

const SelectionToolbar = ({
  onClearSelection,
  onSelectRandom,
  onSelectRange,
  onStartQuiz,
  maxItems = 109,
  quizzStarted,
  onFinishQuizz
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectionMode, setSelectionMode] = useState('first');
  const [randomCount, setRandomCount] = useState(10);
  const [range, setRange] = useState([1, 10]);

  const getSelectionText = () => {
    switch (selectionMode) {
      case 'first':
        return `First ${range[1]} verbs`;
      case 'random':
        return `Random ${randomCount} verbs`;
      case 'range':
        return `Verbs ${range[0]} - ${range[1]}`;
      default:
        return 'Select verbs';
    }
  };

  const handleRangeChange = (newRange) => {
    setRange(newRange);
    onSelectRange(newRange);
  };

  const handleRandomSelection = () => {
    setSelectionMode('random');
    onSelectRandom(randomCount);
  };



  const handleFirstNSelection = () => {
    setSelectionMode('first');
    onSelectRange([1, range[1]]);
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-2">
      {/* Selection Button */}
      <div className="relative">
        <Button
          variant="outline"
          className="w-full justify-between"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{getSelectionText()}</span>
          {isOpen ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
        </Button>

        {/* Dropdown Panel */}
        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-background border rounded-lg shadow-lg">
            <div className="p-4 space-y-4">
              {/* Selection Mode Buttons */}
              <div className="space-y-2">
                <Button
                  variant={selectionMode === 'first' ? 'default' : 'ghost'}
                  className="w-full justify-start"
                  onClick={handleFirstNSelection}
                >
                  First N verbs
                </Button>
                <Button
                  variant={selectionMode === 'random' ? 'default' : 'ghost'}
                  className="w-full justify-start"
                  onClick={handleRandomSelection}
                >
                  Random verbs
                </Button>

              </div>

              {/* Controls based on selection mode */}
              <div className="p-2 bg-secondary rounded-lg space-y-4">
                {selectionMode === 'random' ? (
                  <div className="flex items-center space-x-2">
                    <Input
                      type="number"
                      value={randomCount}
                      onChange={(e) => setRandomCount(parseInt(e.target.value) || 0)}
                      className="w-20"
                      min="1"
                      max={maxItems}
                    />
                    <Button variant="outline" onClick={() => onSelectRandom(randomCount)}>
                      <Dices className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <>
                    <Slider.Root
                      className="relative flex h-5 touch-none select-none items-center"
                      defaultValue={[1, 10]}
                      value={range}
                      onValueChange={handleRangeChange}
                      step={1}>
                      <Slider.Track className="relative h-[3px] grow rounded-full bg-black">
                        <Slider.Range className="absolute h-full rounded-full bg-black" />
                      </Slider.Track>
                      <Slider.Thumb
                        className="block size-5 rounded-[10px] bg-white shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_5px] focus:shadow-blackA5 focus:outline-none"
                        aria-label="Volume"
                      />
                      <Slider.Thumb
                        className="block size-5 rounded-[10px] bg-white shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_5px] focus:shadow-blackA5 focus:outline-none"
                        aria-label="Volume"
                      />
                    </Slider.Root>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

        
      {
        !quizzStarted && (
          
        <Button
          className="w-full"
          onClick={onStartQuiz}
        >
          <Play className="h-4 w-4 mr-2" />
          Start Quizz
        </Button>)
      }
      {
        
        quizzStarted && (
        
        <Button
          className="w-full"
          onClick={onFinishQuizz}
        >
          <Square className="h-4 w-4 mr-2" />
          Stop Quizz
        </Button>)
      }
      
      

    </div>
  );
};

export default SelectionToolbar;