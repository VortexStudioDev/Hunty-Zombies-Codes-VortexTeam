import React from 'react';
import { Copy, Check, Gift } from 'lucide-react';
import { Code, Language } from '../types';
import { translations } from '../data/translations';

interface CodeCardProps {
  code: Code;
  language: Language;
  isCopied: boolean;
  onCopy: (code: string) => void;
}

export const CodeCard: React.FC<CodeCardProps> = ({ code, language, isCopied, onCopy }) => {
  return (
    <div className="bg-gradient-to-br from-white to-slate-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 overflow-hidden group hover:border-purple-300">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-3 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300">
              <Gift className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 tracking-wide">{code.code}</h3>
              <p className="text-sm text-purple-600 font-medium">
                {language === 'en' ? 'Free Rewards Available' : 'Ücretsiz Ödüller Mevcut'}
              </p>
            </div>
          </div>
          
          <button
            onClick={() => onCopy(code.code)}
            className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-5 py-3 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            {isCopied ? (
              <>
                <Check className="w-4 h-4" />
                <span className="font-medium">{translations.copied[language]}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span className="font-medium">{translations.copy[language]}</span>
              </>
            )}
          </button>
        </div>
      </div>
      
      <div className="h-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
};