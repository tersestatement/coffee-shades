import React from 'react';
import { Slider } from '@/components/ui/slider';
import { Card } from '@/components/ui/card';
import { CoffeeState } from '../App';

interface CoffeeBuilderProps {
  coffee: CoffeeState;
  setCoffee: (coffee: CoffeeState) => void;
}

export function CoffeeBuilder({ coffee, setCoffee }: CoffeeBuilderProps) {
  const updateCreamer = (value: number[]) => {
    setCoffee({ ...coffee, creamer: value[0] });
  };

  const updateSugar = (value: number[]) => {
    setCoffee({ ...coffee, sugar: value[0] });
  };

  const getCoffeeColor = () => {
    // Start at black (0% lightness) and move toward white (100% lightness)
    const totalLightness = (coffee.creamer * 15) + (coffee.sugar * 10);
    const lightness = Math.min(100, totalLightness);
    return `hsl(30, 25%, ${lightness}%)`;
  };

  return (
    <div className="space-y-6">
      {/* Coffee Cup Visualization */}
      <div className="flex justify-center mb-8">
        <div className="relative">
          <div 
            className="w-32 h-32 rounded-full border-4 border-white flex items-center justify-center transition-colors duration-300"
            style={{ backgroundColor: getCoffeeColor() }}
          >
            <div className="w-4 h-8 border-2 border-white rounded-r-full absolute -right-6 top-12 bg-gray-900"></div>
          </div>
          
          {/* Ingredient indicators */}
        </div>
      </div>

      {/* Controls */}
      <div className="space-y-6">
        <Card className="p-4 border border-gray-600 bg-gray-700">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold font-mono text-white">CREAMER UNITS</label>
              <span className="text-sm font-mono bg-white text-black px-2 py-1 rounded">
                {coffee.creamer}
              </span>
            </div>
            <Slider
              value={[coffee.creamer]}
              onValueChange={updateCreamer}
              max={3}
              min={0}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs font-mono text-gray-300">
              <span>0</span>
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>
          </div>
        </Card>

        <Card className="p-4 border border-gray-600 bg-gray-700">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold font-mono text-white">SUGAR UNITS</label>
              <span className="text-sm font-mono bg-white text-black px-2 py-1 rounded">
                {coffee.sugar}
              </span>
            </div>
            <Slider
              value={[coffee.sugar]}
              onValueChange={updateSugar}
              max={3}
              min={0}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs font-mono text-gray-300">
              <span>0</span>
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}