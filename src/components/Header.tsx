import React from 'react';
import { Button } from '@/components/ui/button';
import { HelpCircle, Beaker } from 'lucide-react';

interface HeaderProps {
  onRealityCheck: () => void;
}

export function Header({ onRealityCheck }: HeaderProps) {
  return (
    <header className="border-b-2 border-white bg-gray-900">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Beaker className="w-8 h-8 text-white" />
            <div>
              <h1 className="text-3xl font-bold font-mono">COFFEE SHADES</h1>
              <p className="text-sm text-gray-300 font-mono">
                ANTISOCIAL PERSONALITY ASSESSMENT LABORATORY
              </p>
            </div>
          </div>
          
          <Button
            onClick={onRealityCheck}
            variant="outline"
            className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-black font-mono"
          >
            <HelpCircle className="w-4 h-4 mr-2" />
            IS THIS LEGIT?
          </Button>
        </div>
      </div>
    </header>
  );
}