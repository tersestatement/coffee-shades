import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Share2, AlertTriangle } from 'lucide-react';
import { ResultData, CoffeeState } from '../App';

interface ResultsProps {
  results: ResultData;
  coffee: CoffeeState;
  onShare: () => void;
}

export function Results({ results, coffee, onShare }: ResultsProps) {
  const getCoffeeColor = () => {
    // Start at black (0% lightness) and move toward white (100% lightness)
    const totalLightness = (coffee.creamer * 15) + (coffee.sugar * 10);
    const lightness = Math.min(100, totalLightness);
    return `hsl(30, 25%, ${lightness}%)`;
  };

  return (
    <div className="space-y-6">
      {/* Main Results Card */}
      <Card className="p-8 border-2 border-white bg-gray-800">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div 
              className="w-24 h-24 rounded-full border-4 border-white flex items-center justify-center"
              style={{ backgroundColor: getCoffeeColor() }}
            >
              <div className="w-3 h-6 border-2 border-white rounded-r-full absolute -right-6 top-12 bg-gray-900"></div>
            </div>
          </div>

          <div>
            <div className="text-4xl font-bold font-mono mb-2 text-white">
              {results.score}/10
            </div>
            <div className="text-2xl font-bold mb-4 text-white">
              {results.label}
            </div>
          </div>

          <Button
            onClick={onShare}
            className="bg-white text-black hover:bg-gray-200 hover:text-black font-mono"
            size="lg"
          >
            <Share2 className="w-4 h-4 mr-2" />
            SHARE YOUR CUP OF CRAZY
          </Button>
        </div>
      </Card>

      {/* Personality Traits */}
      <Card className="p-6 border-2 border-white bg-gray-800">
        <h3 className="text-xl font-bold mb-4 font-mono flex items-center text-white">
          <AlertTriangle className="w-5 h-5 mr-2" />
          PERSONALITY ASSESSMENT
        </h3>
        <div className="space-y-3">
          {results.traits.map((trait, index) => (
            <div key={index} className="p-3 bg-gray-700 border border-gray-600 rounded">
              <p className="text-sm text-white">{trait}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Behavioral Corrections */}
      <Card className="p-6 border-2 border-white bg-gray-800">
        <h3 className="text-xl font-bold mb-4 font-mono text-white">
          RECOMMENDED BEHAVIORAL CORRECTIONS
        </h3>
        <div className="space-y-3">
          {results.corrections.map((correction, index) => (
            <div key={index} className="p-3 bg-gray-700 border border-gray-600 rounded">
              <p className="text-sm font-mono text-white">{correction}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Disclaimer */}
      <Card className="p-4 border border-gray-600 bg-gray-700">
        <p className="text-xs text-gray-200 text-center">
          <strong>DISCLAIMER:</strong> This assessment is for entertainment purposes only. 
          Results are not scientifically validated and should not be used for actual 
          psychological diagnosis or evaluation.
        </p>
      </Card>
    </div>
  );
}