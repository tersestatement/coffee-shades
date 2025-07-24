import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Copy, Facebook, Twitter } from 'lucide-react';
import { ResultData, CoffeeState } from '../App';

interface ShareModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  results: ResultData;
  coffee: CoffeeState;
}

export function ShareModal({ open, onOpenChange, results, coffee }: ShareModalProps) {
  const getCoffeeColor = () => {
    // Start at black (0% lightness) and move toward white (100% lightness)
    const totalLightness = (coffee.creamer * 15) + (coffee.sugar * 10);
    const lightness = Math.min(100, totalLightness);
    return `hsl(30, 25%, ${lightness}%)`;
  };

  const shareText = `I scored ${results.score}/10 on the Coffee Shades psychopathy test! My result: ${results.label}. Try it yourself!`;
  const shareUrl = window.location.href;
  const hashtags = "#CupOfCrazy #BitternessRevealed #SweetenedSanity";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${shareText} ${shareUrl} ${hashtags}`);
  };

  const shareToTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}&hashtags=${encodeURIComponent(hashtags.replace('#', ''))}`;
    window.open(url, '_blank');
  };

  const shareToFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-gray-800 border-2 border-white">
        <DialogHeader>
          <DialogTitle className="font-mono text-white">SHARE RESULTS</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Preview Card */}
          <Card className="p-6 border-2 border-white bg-gray-700 text-center">
            <div className="flex justify-center mb-4">
              <div 
                className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center"
                style={{ backgroundColor: getCoffeeColor() }}
              >
                <div className="w-2 h-4 border-2 border-white rounded-r-full absolute translate-x-4 bg-gray-900"></div>
              </div>
            </div>
            
            <div className="text-2xl font-bold font-mono mb-2 text-white">
              {results.score}/10
            </div>
            <div className="text-lg font-bold mb-2 text-white">
              {results.label}
            </div>
            <div className="text-xs text-gray-300">
              Coffee Shades Assessment
            </div>
          </Card>

          {/* Share Buttons */}
          <div className="space-y-2">
            <Button
              onClick={copyToClipboard}
              className="w-full font-mono border-2 border-white bg-transparent text-white hover:bg-white hover:text-black"
              variant="outline"
            >
              <Copy className="w-4 h-4 mr-2" />
              COPY TO CLIPBOARD
            </Button>
            
            <Button
              onClick={shareToTwitter}
              className="w-full font-mono bg-blue-600 hover:bg-blue-700 text-white hover:text-white"
            >
              <Twitter className="w-4 h-4 mr-2" />
              SHARE ON X
            </Button>
            
            <Button
              onClick={shareToFacebook}
              className="w-full font-mono bg-blue-700 hover:bg-blue-800 text-white hover:text-white"
            >
              <Facebook className="w-4 h-4 mr-2" />
              SHARE ON FACEBOOK
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}