import { getCurrentLanguage, t as translate } from '@/utils/i18n';
import { useEffect, useState } from 'react';

export const useTranslation = () => {
  const [language, setLanguage] = useState<'en' | 'it'>('en');

  useEffect(() => {
    // Set initial language
    setLanguage(getCurrentLanguage());

    // Listen for language changes
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail.language);
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);

    return () => {
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);

  const t = (key: string) => translate(key, language);

  return { t, language };
};

export default useTranslation;
