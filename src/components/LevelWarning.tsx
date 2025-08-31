import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface LevelWarningProps {
  language: Language;
}

export const LevelWarning: React.FC<LevelWarningProps> = ({ language }) => {
  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 p-4 rounded-lg mb-8 shadow-md">
      <div className="flex items-center space-x-3">
        <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
        <p className="text-amber-800 font-medium">
          {translations.levelRestriction[language]}
        </p>
      </div>
    </div>
  );
};