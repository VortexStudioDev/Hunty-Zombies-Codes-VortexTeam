import React from 'react';
import { Calendar, RefreshCw } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex items-center space-x-2">
            <RefreshCw className="w-4 h-4 text-purple-400" />
            <span className="text-gray-300">{translations.updateNote[language]}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-blue-400" />
            <span className="text-gray-300">{translations.lastUpdated[language]}</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-700">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg animate-pulse">V</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
            </div>
            <span className="text-purple-400 font-bold text-lg">VortexTeamDev</span>
          </div>
          <p className="text-gray-400 text-sm">
            {language === 'en' 
              ? 'Not affiliated with Roblox Corporation. Game codes are provided as-is.'
              : 'Roblox Corporation ile bağlantılı değildir. Oyun kodları olduğu gibi sağlanmaktadır.'
            }
          </p>
        </div>
      </div>
    </footer>
  );
};