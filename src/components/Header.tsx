import React from 'react';
import { Globe, Gamepad2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HeaderProps {
  language: Language;
  onLanguageToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ language, onLanguageToggle }) => {
  return (
    <header className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Gamepad2 className="w-8 h-8 text-purple-300" />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                {translations.title[language]}
              </h1>
              <p className="text-purple-200 text-sm md:text-base">
                {translations.subtitle[language]}
              </p>
            </div>
          </div>
          
          <button
            onClick={onLanguageToggle}
            className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-200 backdrop-blur-sm"
          >
            <Globe className="w-4 h-4" />
            <span className="font-medium">{language.toUpperCase()}</span>
          </button>
        </div>
      </div>
    </header>
  );
};