import { useTranslation } from '@/hooks/useTranslation';
import { Icon } from '@iconify/react';
import React from 'react';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/emanuele-toma',
      icon: 'simple-icons:github',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/emanuele-toma',
      icon: 'simple-icons:linkedin',
    },
    {
      name: 'Email',
      url: 'mailto:emanuele@toma.gg',
      icon: 'lucide:mail',
    },
  ];

  return (
    <footer className="bg-slate-900/80">
      <div className="container mx-auto px-6 py-12">
        {/* Divider */}
        <hr className="border-slate-700 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <div className="mb-4 md:mb-0">
            <p>{t('footer.copyright')}</p>
          </div>

          <div className="flex items-center space-x-1">
            <span>{t('footer.built')}</span>
            <Icon icon="vscode-icons:file-type-astro" className="w-5 h-5 mx-1 -mb-1" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
