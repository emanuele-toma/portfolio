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

  return (
    <div className="relative group">
      {!mobile && (
        <button className="flex items-center space-x-2 px-3 py-2 text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-slate-700/50">
          <Icon icon={'lucide:globe'} className="w-4 h-4" />
        </button>
      )}

      <div
        className={`absolute ${top ? 'top-full' : 'bottom-full'} left-0 ${top ? 'mt-1' : 'mb-1'} bg-slate-800 border border-slate-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[120px] z-50`}
      >
        {languages.map(lang => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`w-full flex items-center space-x-2 px-3 py-2 text-left hover:bg-slate-700 transition-colors first:rounded-t-lg last:rounded-b-lg ${
              currentLang === lang.code ? 'bg-slate-700 text-white' : 'text-slate-300'
            }`}
          >
            <span>
              <Icon icon={lang.flag} className="w-5 h-5" />
            </span>
            <span className="text-sm">{lang.name}</span>
          </button>
        ))}
      </div>

      {mobile && (
        <div className="flex flex-col space-y-1">
          <ul className="pt-2">
            {languages.map(lang => (
              <>
                <li className="px-2">
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`flex items-center space-x-2.5 w-full px-2.5 py-3 text-left text-slate-300 hover:bg-slate-700 hover:text-white transition-colors rounded-lg ${
                      currentLang === lang.code ? 'bg-slate-700 text-white' : ''
                    }`}
                  >
                    <Icon icon={lang.flag} className="w-5 h-5 -mb-[2px]" />
                    <span>{lang.name}</span>
                  </button>
                </li>
              </>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
