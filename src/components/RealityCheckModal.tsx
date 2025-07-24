import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import { AlertTriangle, ExternalLink } from 'lucide-react';

interface RealityCheckModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RealityCheckModal({ open, onOpenChange }: RealityCheckModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-gray-800 border-2 border-white">
        <DialogHeader>
          <DialogTitle className="font-mono flex items-center text-white">
            <AlertTriangle className="w-5 h-5 mr-2" />
            REALITY CHECK: THE SCIENCE
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <Card className="p-4 border border-gray-600 bg-gray-700">
            <h3 className="font-bold mb-2 text-white">THE REAL STUDY</h3>
            <p className="text-sm leading-relaxed text-gray-200">
              This app is inspired by a 2016 peer-reviewed study published in the journal 
              <em> Appetite</em> by Christina Sagioglou and Tobias Greitemeyer titled 
              "Bitter taste preferences and antisocial personality traits."
            </p>
          </Card>

          <Card className="p-4 border border-gray-600 bg-gray-700">
            <h3 className="font-bold mb-2 text-white">WHAT THEY FOUND</h3>
            <p className="text-sm leading-relaxed mb-3 text-gray-200">
              The researchers found a <strong>weak correlation</strong> between preference 
              for bitter tastes (including black coffee) and certain antisocial traits, 
              particularly everyday sadism and psychopathy measures.
            </p>
            <p className="text-sm leading-relaxed text-gray-200">
              Key emphasis: The correlation was <strong>weak</strong> and the study 
              explicitly states that correlation does not imply causation.
            </p>
          </Card>

          <Card className="p-4 border border-gray-600 bg-gray-700">
            <h3 className="font-bold mb-2 text-white">IMPORTANT LIMITATIONS</h3>
            <ul className="text-sm space-y-2 text-gray-200">
              <li>• Sample size was relatively small (953 participants)</li>
              <li>• Self-reported personality assessments</li>
              <li>• Cultural and demographic limitations</li>
              <li>• No causal relationship established</li>
              <li>• Many people who prefer bitter tastes are perfectly normal</li>
            </ul>
          </Card>

          <Card className="p-4 border border-yellow-500 bg-yellow-900">
            <h3 className="font-bold mb-2 text-yellow-100">THIS APP'S PURPOSE</h3>
            <p className="text-sm leading-relaxed text-yellow-200">
              Coffee Shades is a <strong>satirical entertainment tool</strong> that 
              exaggerates and gamifies these research findings for humor. It is 
              <strong> NOT</strong> a diagnostic tool and should never be used to 
              make judgments about yourself or others.
            </p>
          </Card>

          <div className="pt-4 border-t">
            <p className="text-xs text-gray-300">
              For the original study, search for: "Bitter taste preferences and antisocial 
              personality traits" in <em>Appetite</em> journal, Volume 96, January 2016.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}