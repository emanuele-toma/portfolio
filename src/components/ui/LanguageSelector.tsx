import { getCurrentLanguage, setCurrentLanguage } from '@/utils/i18n';
import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';

interface LanguageSelectorProps {
  top?: boolean;
  mobile?: boolean;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ top = false, mobile = false }) => {
  const [currentLang, setCurrentLang] = useState<'en' | 'it' | null>(null);

  const languages = [
    { code: 'en' as const, name: 'English', flag: 'flag:gb-4x3' },
    { code: 'it' as const, name: 'Italiano', flag: 'flag:it-4x3' },
  ];

  useEffect(() => {
    // Set initial language
    setCurrentLang(getCurrentLanguage());

    // Listen for language changes
    const handleLanguageChange = (event: CustomEvent) => {
      setCurrentLang(event.detail.language);
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);

    return () => {
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);

  const handleLanguageChange = (langCode: 'en' | 'it') => {
    setCurrentLanguage(langCode);
    setCurrentLang(langCode);
  };

  if (mobile) {
    return (
      <div className="flex flex-col space-y-1">
        <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">Language</div>
        <div className="grid grid-cols-2 gap-2 px-2">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`flex items-center justify-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                currentLang === lang.code
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                  : 'bg-white/5 text-slate-400 border border-white/5 hover:bg-white/10'
              }`}
            >
              <Icon icon={lang.flag} className="w-4 h-4 rounded-sm" />
              <span className="text-sm font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      <button className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200">
        <Icon icon="lucide:globe" className="w-4 h-4" />
      </button>

      <div
        className={`absolute ${top ? 'top-full mt-2' : 'bottom-full mb-2'} right-0 w-32 p-1 glass-card rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-bottom-right z-50`}
      >
        {languages.map(lang => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`w-full flex items-center space-x-2 px-2 py-1.5 rounded-lg text-left transition-all duration-200 ${
              currentLang === lang.code
                ? 'bg-cyan-500/10 text-cyan-400'
                : 'text-slate-300 hover:bg-white/5 hover:text-white'
            }`}
          >
            <Icon icon={lang.flag} className="w-4 h-4 rounded-sm shadow-sm" />
            <span className="text-xs font-medium">{lang.name}</span>
            {currentLang === lang.code && <Icon icon="lucide:check" className="w-3 h-3 ml-auto" />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
