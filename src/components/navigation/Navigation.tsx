import LanguageSelector from '@/components/ui/LanguageSelector';
import { useTranslation } from '@/hooks/useTranslation';
import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (window) {
      setIsScrolled(window.scrollY > 0);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-4 left-1/2 transition-all duration-500 transform -translate-x-1/2 z-50 hidden md:flex nav-top bg-slate-800/90 backdrop-blur-md rounded-full px-4 py-2 border border-slate-600
        ${!isScrolled ? 'translate-y-0' : '-translate-y-20'}
        `}
      >
        <div className={`flex items-center space-x-1`}>
          <ul className="flex items-center space-x-1">
            {navItems.map(item => (
              <li key={item.href}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 hover:bg-gray-100/10 hover:text-white`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <LanguageSelector top />
        </div>
      </nav>

      <nav
        className={`fixed bottom-4 left-1/2 transition-all duration-500 transform -translate-x-1/2 z-50 hidden md:flex nav-bottom bg-slate-900/50 backdrop-blur-sm rounded-full px-2 py-1
        ${isScrolled ? 'translate-y-0' : 'translate-y-20'}
        `}
      >
        <div className={`flex items-center space-x-0`}>
          <ul className="flex items-center space-x-1">
            {navItems.map(item => (
              <li key={item.href}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 hover:bg-gray-100/10 hover:text-white`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <LanguageSelector />
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 right-0 z-50 md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="m-4 p-3 bg-slate-800/90 backdrop-blur-md rounded-full border border-slate-600 text-slate-300 hover:text-white transition-colors duration-200"
          aria-label="Toggle menu"
        >
          <Icon
            icon={isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'}
            className="w-6 h-6 transition-transform duration-200"
          />
        </button>

        {/* Mobile Menu Dropdown */}
        <div
          className={`absolute top-full right-4 mt-2 w-48 bg-slate-800/95 backdrop-blur-md rounded-lg border border-slate-600 shadow-xl transition-all duration-200 ${
            isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
          }`}
        >
          <ul className="py-2">
            {navItems.map(item => (
              <li key={item.href}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="w-full px-4 py-3 text-left text-slate-300 hover:bg-slate-700 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="border-t border-slate-700">
              <LanguageSelector mobile />
            </li>
          </ul>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-all duration-200 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navigation;
