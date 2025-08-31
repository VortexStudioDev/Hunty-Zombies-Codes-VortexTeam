import React from 'react';
import { BookOpen, ArrowRight, Image } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HowToRedeemProps {
  language: Language;
}

export const HowToRedeem: React.FC<HowToRedeemProps> = ({ language }) => {
  const steps = [
    translations.step1[language],
    translations.step2[language],
    translations.step3[language],
    translations.step4[language]
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 md:p-8 shadow-lg border border-slate-200">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-blue-600 p-2 rounded-lg">
          <BookOpen className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">
          {translations.howToRedeem[language]}
        </h2>
      </div>
      
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center space-x-4 group">
            <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm group-hover:bg-blue-700 transition-colors duration-200">
              {index + 1}
            </div>
            <p className="text-gray-700 font-medium flex-1">{step}</p>
            <ArrowRight className="w-4 h-4 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </div>
        ))}
      </div>
      
      <div className="mt-8 pt-6 border-t border-slate-200">
        <div className="flex items-center space-x-2 mb-4">
          <Image className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-800">
            {language === 'en' ? 'Visual Guide' : 'Görsel Rehber'}
          </h3>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-md border border-slate-200">
          <img
            src="https://static.beebom.com/wp-content/uploads/2025/07/Hunty-Zombies-codes-redeem.jpg?quality=75&strip=all"
            alt={language === 'en' ? 'How to redeem codes in Hunty Zombies' : 'Hunty Zombies\'te kod nasıl kullanılır'}
            className="w-full h-auto"
          />
          <div className="p-3 bg-gray-50">
            <p className="text-sm text-gray-600 text-center">
              {language === 'en' 
                ? 'Look for the "Codes" button on the right side of your game screen'
                : 'Oyun ekranınızın sağ tarafındaki "Kodlar" butonunu arayın'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};