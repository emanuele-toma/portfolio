// Simple i18n implementation
import enTranslations from '@/locales/en/common.json';
import itTranslations from '@/locales/it/common.json';

const translations = {
  en: enTranslations,
  it: itTranslations,
};

// Get current language from localStorage or default to 'en'
export const getCurrentLanguage = (): 'en' | 'it' => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('language') as 'en' | 'it';
    const userLang = navigator.language.slice(0, 2).toLowerCase();
    if (userLang === 'it') {
      return 'it';
    }
    return saved && (saved === 'en' || saved === 'it') ? saved : 'en';
  }
  return 'en';
};

// Set current language and save to localStorage
export const setCurrentLanguage = (lang: 'en' | 'it') => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang);
    // Trigger a custom event to notify components of language change
    window.dispatchEvent(new CustomEvent('languageChange', { detail: { language: lang } }));
  }
};

// Get nested property from object using dot notation
const getNestedProperty = (obj: any, path: string): any => {
  return path.split('.').reduce((current, key) => current?.[key], obj);
};

// Translation function
export const t = (key: string, lang?: 'en' | 'it'): string => {
  const currentLang = lang || getCurrentLanguage();
  const translation = getNestedProperty(translations[currentLang], key);

  if (translation !== undefined) {
    if (typeof translation === 'string') {
      return translation;
    } else if (Array.isArray(translation) || typeof translation === 'object') {
      return JSON.stringify(translation);
    }
  }

  // Fallback to English if not found in current language
  if (currentLang !== 'en') {
    const fallback = getNestedProperty(translations.en, key);
    if (fallback !== undefined) {
      if (typeof fallback === 'string') {
        return fallback;
      } else if (Array.isArray(fallback) || typeof fallback === 'object') {
        return JSON.stringify(fallback);
      }
    }
  }

  // Return key if translation not found
  return key;
};

export default { t, getCurrentLanguage, setCurrentLanguage };
