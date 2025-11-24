import { useTranslation } from '@/hooks/useTranslation';
import { Icon } from '@iconify/react';
import React from 'react';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black/50 backdrop-blur-md border-t border-white/5 py-8 pb-24 md:pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <div className="mb-4 md:mb-0">
            <p>{t('footer.copyright')}</p>
          </div>

          <div className="flex items-center space-x-2">
            <span>{t('footer.built')}</span>
            <Icon icon="vscode-icons:file-type-astro" className="w-5 h-5" />
            <span className="mx-1">&</span>
            <Icon icon="logos:react" className="w-5 h-5" />
            <span className="mx-1">&</span>
            <Icon icon="logos:tailwindcss-icon" className="w-5 h-5" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
