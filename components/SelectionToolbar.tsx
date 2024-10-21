import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {RotateCcwIcon,Dices} from "lucide-react"
const CustomToolbar = ({ onClearSelection, onSelectRandom }) => {
  const [randomCount, setRandomCount] = useState(1);

  return (
    <div className="flex items-center space-x-2 p-2 bg-secondary rounded-md">
      <Input
        type="number"
        value={randomCount}
        onChange={(e) => setRandomCount(parseInt(e.target.value) || 0)}
        className="w-20"
        min="1" max="109"
      />
      <Button variant="outline" onClick={() => onSelectRandom(randomCount)}>
        <Dices/>
      </Button>
      <Button className="justify-items-end" variant="outline" onClick={onClearSelection}>
        <RotateCcwIcon/>
      </Button>
    
    </div>
  );
};

export default CustomToolbar;
