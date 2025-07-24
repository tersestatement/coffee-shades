import React, { useState, useEffect } from 'react';

interface BinaryDisplayProps {
  score: number;
  showScore: boolean;
}

export function BinaryDisplay({ score, showScore }: BinaryDisplayProps) {
  const [binaryPattern, setBinaryPattern] = useState<string[]>([]);
  const [animationKey, setAnimationKey] = useState(0);

  // Generate different binary patterns based on score ranges
  const generateBinaryPattern = (score: number) => {
    const patterns = {
      1: ['11111111', '00000000', '10101010', '01010101'], // Most chaotic
      2: ['11110000', '00001111', '10011001', '01100110'],
      3: ['11100111', '00011000', '10000001', '01111110'],
      4: ['11000011', '00111100', '10100101', '01011010'],
      5: ['10101010', '01010101', '11001100', '00110011'],
      6: ['10011001', '01100110', '11000011', '00111100'],
      7: ['10000001', '01111110', '10101010', '01010101'],
      8: ['01111110', '10000001', '01100110', '10011001'],
      9: ['00111100', '11000011', '01010101', '10101010'],
      10: ['00000000', '11111111', '00110011', '11001100'] // Least chaotic
    };
    
    return patterns[score as keyof typeof patterns] || patterns[5];
  };

  const getAnimationSpeed = (score: number) => {
    // Lower scores = faster, more chaotic animation
    if (score <= 2) return 150; // Very fast
    if (score <= 4) return 250; // Fast
    if (score <= 6) return 400; // Medium
    if (score <= 8) return 600; // Slow
    return 800; // Very slow
  };

  const getGlitchIntensity = (score: number) => {
    // Lower scores = more glitching
    return score <= 3 ? 'high' : score <= 6 ? 'medium' : 'low';
  };

  useEffect(() => {
    const pattern = generateBinaryPattern(score);
    setBinaryPattern(pattern);
    setAnimationKey(prev => prev + 1); // Force re-render for new animation
  }, [score]);

  useEffect(() => {
    if (!showScore) {
      const speed = getAnimationSpeed(score);
      const interval = setInterval(() => {
        const pattern = generateBinaryPattern(score);
        // Add some randomness to make it more chaotic
        const randomizedPattern = pattern.map(row => 
          row.split('').map(bit => 
            Math.random() < 0.1 ? (bit === '1' ? '0' : '1') : bit
          ).join('')
        );
        setBinaryPattern(randomizedPattern);
      }, speed);

      return () => clearInterval(interval);
    }
  }, [score, showScore]);

  const glitchIntensity = getGlitchIntensity(score);
  
  const getScoreLabel = (score: number) => {
    if (score <= 3) return 'HIGHLY ANTISOCIAL';
    if (score <= 5) return 'MODERATELY ANTISOCIAL';
    if (score <= 7) return 'SOCIALLY ACCEPTABLE';
    return 'PROSOCIAL TENDENCIES';
  };

  if (showScore) {
    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold font-mono text-white">{score}/10</span>
          <span className="text-sm font-mono text-white">{getScoreLabel(score)}</span>
        </div>
        
        <div className="bg-gray-700 p-4 rounded border border-gray-600">
          <div className="text-center">
            <div className="text-3xl font-bold font-mono text-green-400 mb-2">
              ANALYSIS COMPLETE
            </div>
            <div className="text-lg font-mono text-white">
              SCORE: {score}/10
            </div>
          </div>
        </div>
        
        <div className="flex justify-between text-xs font-mono text-gray-300">
          <span>PURE EVIL</span>
          <span>SAINT</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold font-mono text-white">ANALYZING...</span>
        <span className="text-sm font-mono text-white">PROCESSING DATA</span>
      </div>
      
      <div 
        key={animationKey}
        className={`bg-black p-4 rounded border-2 border-green-400 font-mono text-green-400 overflow-hidden ${
          glitchIntensity === 'high' ? 'animate-pulse' : ''
        }`}
        style={{
          filter: glitchIntensity === 'high' ? 'contrast(1.2) brightness(1.1)' : 'none'
        }}
      >
        <div className="space-y-1">
          {binaryPattern.map((row, index) => (
            <div 
              key={`${animationKey}-${index}`}
              className={`text-xs tracking-wider ${
                glitchIntensity === 'high' && Math.random() < 0.3 ? 'text-red-400' : 'text-green-400'
              }`}
              style={{
                animation: `binaryFlicker ${getAnimationSpeed(score)}ms infinite`,
                animationDelay: `${index * 50}ms`
              }}
            >
              {row.split('').map((bit, bitIndex) => (
                <span 
                  key={bitIndex}
                  className={`inline-block ${
                    glitchIntensity !== 'low' && Math.random() < 0.1 ? 'animate-ping' : ''
                  }`}
                  style={{
                    opacity: Math.random() < 0.05 ? 0.3 : 1
                  }}
                >
                  {bit}
                </span>
              ))}
            </div>
          ))}
        </div>
        
        {glitchIntensity === 'high' && (
          <div className="absolute inset-0 pointer-events-none">
            <div 
              className="w-full h-0.5 bg-green-400 opacity-30"
              style={{
                animation: 'scanline 2s linear infinite',
                transform: 'translateY(0)'
              }}
            />
          </div>
        )}
      </div>
      
      <style jsx>{`
        @keyframes binaryFlicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        
        @keyframes scanline {
          0% { transform: translateY(0); }
          100% { transform: translateY(100px); }
        }
      `}</style>
    </div>
  );
}