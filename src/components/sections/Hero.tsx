import { useTranslation } from '@/hooks/useTranslation';
import { Icon } from '@iconify/react';
import React from 'react';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-[100dvh] flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <p className="text-lg md:text-xl text-slate-400 mb-4 opacity-0 animate-fade-in">{t('hero.greeting')}</p>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-in animation-delay-300">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {t('hero.name')}
            </span>
          </h1>

          {/* Role */}
          <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-slate-300 mb-8 opacity-0 animate-fade-in animation-delay-600">
            {t('hero.role')}
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in animation-delay-900">
            {t('hero.subtitle')}
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToAbout}
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl opacity-0 animate-fade-in animation-delay-1200"
          >
            {t('hero.cta')}
            <Icon
              icon="lucide:arrow-down"
              className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300"
            />
          </button>

          {/* Quick Links */}
          <div className="flex justify-center items-center lg:space-x-6 space-x-0 mt-16 opacity-0 animate-fade-in animation-delay-1500">
            <a
              href="https://linkedin.com/in/emanuele-toma"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center lg:px-4 px-2 py-2 text-slate-400 hover:text-blue-400 transition-colors duration-200"
            >
              <Icon icon="simple-icons:linkedin" className="w-5 h-5 mr-2" />
              <span className="font-medium">{t('hero.links.linkedin')}</span>
            </a>

            <a
              href="https://github.com/emanuele-toma"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center lg:px-4 px-2 py-2 text-slate-400 hover:text-slate-200 transition-colors duration-200"
            >
              <Icon icon="simple-icons:github" className="w-5 h-5 mr-2" />
              <span className="font-medium">{t('hero.links.github')}</span>
            </a>

            <a
              href="/files/emanuele-toma-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center lg:px-4 px-2 py-2 text-slate-400 hover:text-green-400 transition-colors duration-200"
            >
              <Icon icon="lucide:file-text" className="w-5 h-5 mr-2" />
              <span className="font-medium">{t('hero.links.resume')}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in animation-delay-2000">
        <div className="animate-bounce">
          <Icon icon="lucide:chevron-down" className="w-6 h-6 text-slate-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
