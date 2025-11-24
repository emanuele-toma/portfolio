import LanguageSelector from '@/components/ui/LanguageSelector';
import { useTranslation } from '@/hooks/useTranslation';
import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id') || '';
        }
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: t('nav.home'), icon: 'lucide:home' },
    { href: '#about', label: t('nav.about'), icon: 'lucide:user' },
    { href: '#skills', label: t('nav.skills'), icon: 'lucide:cpu' },
    { href: '#projects', label: t('nav.projects'), icon: 'lucide:code' },
    { href: '#experience', label: t('nav.experience'), icon: 'lucide:briefcase' },
    { href: '#contact', label: t('nav.contact'), icon: 'lucide:mail' },
  ];

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Dock Navigation */}
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="glass-panel rounded-full px-3 py-2 flex items-center gap-1 md:gap-2 shadow-2xl border border-white/10">
          {navItems.map(item => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`relative p-2 rounded-full transition-all duration-300 group ${
                activeSection === item.href.replace('#', '')
                  ? 'bg-white/10 text-cyan-400 shadow-[0_0_10px_rgba(0,242,255,0.15)]'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
              aria-label={item.label}
            >
              <Icon icon={item.icon} className="w-4 h-4 md:w-5 md:h-5" />

              {/* Tooltip */}
              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none border border-white/10">
                {item.label}
              </span>
            </button>
          ))}

          <div className="w-px h-6 bg-white/10 mx-1" />

          <div className="relative group">
            <LanguageSelector />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
