import React from 'react';
import { Header } from './components/Header';
import { GameImage } from './components/GameImage';
import { LevelWarning } from './components/LevelWarning';
import { HowToRedeem } from './components/HowToRedeem';
import { CodeCard } from './components/CodeCard';
import { Footer } from './components/Footer';
import { useLanguage } from './hooks/useLanguage';
import { useCopy } from './hooks/useCopy';
import { codes } from './data/codes';
import { translations } from './data/translations';

function App() {
  const { language, toggleLanguage } = useLanguage();
  const { copiedCode, copyToClipboard } = useCopy();

  const activeCodes = codes.filter(code => code.isActive);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-purple-50 to-indigo-100">
      <Header language={language} onLanguageToggle={toggleLanguage} />
      
      <main className="container mx-auto px-4 py-8">
        <GameImage />
        
        <LevelWarning language={language} />
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <HowToRedeem language={language} />
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-2 rounded-lg">
                  <div className="w-6 h-6 bg-white rounded-full animate-pulse"></div>
                </div>
                <span>{translations.activeCodes[language]}</span>
              </h2>
              
              <div className="grid gap-4">
                {activeCodes.map((code) => (
                  <CodeCard
                    key={code.id}
                    code={code}
                    language={language}
                    isCopied={copiedCode === code.code}
                    onCopy={copyToClipboard}
                  />
                ))}
              </div>
              
              {activeCodes.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-6xl mb-4">🎮</div>
                  <p className="text-gray-500 text-lg">
                    {language === 'en' 
                      ? 'No active codes available at the moment'
                      : 'Şu anda aktif kod bulunmamaktadır'
                    }
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer language={language} />
    </div>
  );
}

export default App;