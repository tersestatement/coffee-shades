import React, { useState } from 'react';
import { CoffeeBuilder } from './components/CoffeeBuilder';
import { BinaryDisplay } from './components/BinaryDisplay';
import { Results } from './components/Results';
import { RealityCheckModal } from './components/RealityCheckModal';
import { ShareModal } from './components/ShareModal';
import { Header } from './components/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { RefreshCw } from 'lucide-react';

export interface CoffeeState {
  creamer: number;
  sugar: number;
}

export interface ResultData {
  score: number;
  label: string;
  traits: string[];
  corrections: string[];
}

function App() {
  const [coffee, setCoffee] = useState<CoffeeState>({ creamer: 0, sugar: 0 });
  const [hasResults, setHasResults] = useState(false);
  const [results, setResults] = useState<ResultData | null>(null);
  const [showRealityCheck, setShowRealityCheck] = useState(false);
  const [showShare, setShowShare] = useState(false);

  const calculateScore = (creamer: number, sugar: number): number => {
    return 1 + creamer + (sugar * 2);
  };

  const getResults = (score: number): ResultData => {
    const scoreLabels = {
      1: "Psychopath Supreme",
      2: "Chaotic Efficient",
      3: "Chaotic Efficient", 
      4: "Low-Grade Menace",
      5: "Low-Grade Menace",
      6: "Functioning Civilian",
      7: "Functioning Civilian",
      8: "Sweethearted Sipper",
      9: "Sweethearted Sipper",
      10: "Marshmallow Manifesto"
    };

    const allTraits = [
      "You pretend to listen, but you're planning global domination.",
      "You take pride in not skipping YouTube ads.",
      "You silently judge people who say 'expresso.'",
      "You return shopping carts, but only to assert dominance.",
      "You enjoy the sound of people struggling with plastic wrap.",
      "You read terms and conditions for fun.",
      "You prefer cold pizza for breakfast.",
      "You organize your bookshelf by spine color, not content.",
      "You find comfort in the hum of fluorescent lights.",
      "You count ceiling tiles during meetings.",
      "You enjoy the clinical precision of hospital corners.",
      "You alphabetize your spice rack obsessively.",
      "You get unreasonably angry when someone misuses the word 'moist'.",
      "You often imagine what life would be like if you were a dragon therapist.",
      "You secretly enjoy watching infomercials for blenders more than you'd like to admit.",
      "You feel oddly powerful holding a glow stick.",
      "You think folding laundry is a competitive sport.",
      "You think parking is a competitive sport.",
      "You trust people who like black licorice a little less than you should.",
      "You get unreasonably angry when someone misuses the word 'literally'.",
      "You often imagine what life would be like if you were a space janitor.",
      "You feel oddly powerful holding a TV remote.",
      "You get unreasonably angry when someone misuses the word 'irregardless'.",
      "You feel oddly powerful holding a laser pointer.",
      "You often imagine what life would be like if you were a time-traveling detective.",
      "You trust people who like kale a little less than you should.",
      "You secretly enjoy watching ant colony documentaries more than you'd like to admit.",
      "You believe birds aren't real might not be *entirely* wrong.",
      "You feel oddly powerful holding a banana.",
      "You believe AI writes all pop songs might not be *entirely* wrong.",
      "You've named your cactus after a fictional villain.",
      "You believe the moon is hollow might not be *entirely* wrong.",
      "You've named your cat after a fictional villain.",
      "You think loading the dishwasher is a competitive sport.",
      "You've rehearsed your reaction to winning an Oscar in the shower.",
      "You secretly enjoy watching cheese slicing tutorials more than you'd like to admit.",
      "You think using a stapler is a competitive sport.",
      "You get unreasonably angry when someone misuses the word 'whom'.",
      "You've named your betta fish after a fictional villain.",
      "You've named your Roomba after a fictional villain.",
      "You secretly enjoy watching train horn compilations more than you'd like to admit.",
      "You trust people who like pineapple pizza a little less than you should.",
      "You correct people's grammar in your head while smiling politely.",
      "You often imagine what life would be like if you were a retired wizard.",
      "You secretly enjoy watching silent vlogging more than you'd like to admit.",
      "You trust people who like coleslaw a little less than you should."
    ];

    const allCorrections = [
      "Compliment 30 squirrels to restore your empathy index.",
      "Eat a sugar cube every time you open a news app.",
      "Recite the Gettysburg Address in a coffee shop to reclaim your humanity.",
      "Pet a therapy dog while reading children's poetry.",
      "Donate your favorite pen to a stranger.",
      "Say 'please' and 'thank you' to your smart speaker.",
      "Write a handwritten thank-you note to your mailperson.",
      "Smile at 10 people who aren't looking at you.",
      "Leave positive reviews for local businesses you've never visited.",
      "Apologize to a houseplant for neglecting it.",
      "Watch 12 hours of goat yoga fail videos as penance.",
      "Recite a Shakespeare soliloquy every morning while brushing your teeth.",
      "Sing the national anthem backwards while playing the kazoo.",
      "Watch 12 hours of 80s workout tapes as penance.",
      "Recite the Gettysburg Address every morning while brushing your teeth.",
      "Apologize to every toasters you encounter today.",
      "Eat 12 pickles to absorb their empathy.",
      "Spend one hour complimenting squirrels in the park.",
      "Watch 33 hours of goat yoga fail videos as penance.",
      "Recite your coffee order every morning while brushing your teeth.",
      "Replace every curse word with 'snicklefritz' for 48 hours.",
      "Watch 7 hours of 80s workout tapes as penance.",
      "Spend one hour complimenting pigeons in the park.",
      "Watch 20 hours of infomercials for fax machines as penance.",
      "Balance a tiny gnome on your head while making decisions.",
      "Replace every curse word with 'picklejuice' for 48 hours.",
      "Eat 33 gummy bears to absorb their empathy.",
      "Only drink from mugs labeled 'World's Okayest Human' for the next week.",
      "Spend one hour complimenting goldfish in the park.",
      "Spend one hour complimenting cats in the park.",
      "Watch 33 hours of infomercials for fax machines as penance.",
      "Donate a unicorn sticker every time you think a sarcastic thought.",
      "Donate a pair of socks every time you think a sarcastic thought.",
      "Eat 7 gummy bears to absorb their empathy.",
      "Sing the national anthem backwards while juggling grapes.",
      "Apologize to every elevators you encounter today.",
      "Only drink from mugs labeled 'Bitterness Be Gone' for the next week.",
      "Apologize to every mirrors you encounter today.",
      "Replace every curse word with 'yeehaw' for 48 hours.",
      "Apologize to every traffic cones you encounter today.",
      "Eat 20 pickles to absorb their empathy.",
      "Eat 7 grapes to absorb their empathy.",
      "Sing the national anthem backwards while wearing oven mitts.",
      "Only drink from mugs labeled 'Definitely Not Evil' for the next week.",
      "Watch 7 hours of goat yoga fail videos as penance.",
      "Eat 20 carrots to absorb their empathy.",
      "Watch 33 hours of 80s workout tapes as penance.",
      "Eat 12 grapes to absorb their empathy.",
      "Watch 12 hours of infomercials for fax machines as penance.",
      "Balance a pineapple on your head while making decisions.",
      "Eat 12 carrots to absorb their empathy.",
      "Eat 20 gummy bears to absorb their empathy.",
      "Eat 20 grapes to absorb their empathy.",
      "Replace every curse word with 'butternut' for 48 hours.",
      "Watch 20 hours of goat yoga fail videos as penance.",
      "Donate a blanket every time you think a sarcastic thought.",
      "Sing the national anthem backwards while hula hooping.",
      "Eat 7 pickles to absorb their empathy.",
      "Eat 33 carrots to absorb their empathy.",
      "Watch 7 hours of infomercials for fax machines as penance.",
      "Watch 33 hours of candle reviews as penance.",
      "Donate a marshmallow every time you think a sarcastic thought.",
      "Eat 33 grapes to absorb their empathy.",
      "Watch 20 hours of 80s workout tapes as penance.",
      "Watch 7 hours of candle reviews as penance.",
      "Balance a vase of spaghetti on your head while making decisions.",
      "Recite the Bee Movie script every morning while brushing your teeth.",
      "Watch 12 hours of candle reviews as penance.",
      "Balance a rubber duck on your head while making decisions.",
      "Eat 33 pickles to absorb their empathy."
    ];

    const getRandomItems = (arr: string[], count: number) => {
      const shuffled = [...arr].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };

    return {
      score,
      label: scoreLabels[score as keyof typeof scoreLabels],
      traits: getRandomItems(allTraits, 3),
      corrections: getRandomItems(allCorrections, 2)
    };
  };

  const handleDrink = () => {
    const score = calculateScore(coffee.creamer, coffee.sugar);
    const resultData = getResults(score);
    
    // Easter egg for pure black coffee
    if (score === 1) {
      setTimeout(() => {
        alert("SYSTEM ALERT: You are unflinchingly efficient. Were you also the kid who ate chalk?");
      }, 1000);
    }
    
    setResults(resultData);
    setHasResults(true);
  };

  const handleReset = () => {
    setCoffee({ creamer: 0, sugar: 0 });
    setHasResults(false);
    setResults(null);
  };

  const currentScore = calculateScore(coffee.creamer, coffee.sugar);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header onRealityCheck={() => setShowRealityCheck(true)} />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {!hasResults ? (
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="p-6 border-2 border-white bg-gray-800">
                <h2 className="text-2xl font-bold mb-4 font-mono text-white">SPECIMEN PREPARATION</h2>
                <CoffeeBuilder coffee={coffee} setCoffee={setCoffee} />
              </Card>
              
              <Card className="p-6 border-2 border-white bg-gray-800">
                <h3 className="text-lg font-bold mb-4 font-mono text-white">ANTISOCIAL PERSONALITY SCORE</h3>
                <BinaryDisplay score={currentScore} showScore={hasResults} />
              </Card>
            </div>
            
            <div className="flex flex-col justify-center">
              <Card className="p-8 border-2 border-white bg-gray-800 text-center">
                <h3 className="text-xl font-bold mb-4 font-mono text-white">ANALYSIS PROTOCOL</h3>
                <p className="text-sm mb-6 text-gray-300 leading-relaxed">
                  Configure your specimen using the controls. Your antisocial personality 
                  score will be calculated in real-time based on bitter taste preference 
                  correlation studies.
                </p>
                <Button 
                  onClick={handleDrink}
                  className="w-full bg-white text-black hover:bg-gray-200 font-mono text-lg py-6"
                  size="lg"
                >
                  INITIATE ANALYSIS
                </Button>
              </Card>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <Results 
              results={results!} 
              coffee={coffee}
              onShare={() => setShowShare(true)}
            />
            
            <div className="text-center">
              <Button
                onClick={handleReset}
                size="lg"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-black font-mono"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                RUN NEW ANALYSIS
              </Button>
            </div>
          </div>
        )}
      </main>

      <RealityCheckModal 
        open={showRealityCheck} 
        onOpenChange={setShowRealityCheck} 
      />
      
      {results && (
        <ShareModal
          open={showShare}
          onOpenChange={setShowShare}
          results={results}
          coffee={coffee}
        />
      )}
    </div>
  );
}

export default App;