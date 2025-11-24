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
    <section id="home" className="min-h-dvh flex items-center justify-center relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Greeting */}
          <div className="inline-block mb-4 px-4 py-1 rounded-full glass-panel animate-fade-in-up">
            <span className="text-cyan-400 font-mono">{t('hero.greeting')}</span>
          </div>

          {/* Name */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight animate-fade-in-up delay-100">
            <span className="text-gradient filter drop-shadow-[0_0_15px_rgba(0,242,255,0.3)]">{t('hero.name')}</span>
          </h1>

          {/* Role */}
          <h2 className="text-2xl md:text-4xl font-light text-slate-300 mb-8 animate-fade-in-up delay-200 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-linear-to-r from-transparent to-cyan-500"></span>
            {t('hero.role')}
            <span className="h-px w-12 bg-linear-to-l from-transparent to-cyan-500"></span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-300">
            {t('hero.subtitle')}
          </p>

          {/* CTA Button */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-fade-in-up delay-400">
            <button
              onClick={scrollToAbout}
              className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,242,255,0.4)]"
            >
              <div className="absolute inset-0 w-full h-full bg-linear-to-r from-cyan-500 to-blue-600 opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="absolute inset-0 border border-cyan-500/50 rounded-full" />
              <span className="relative flex items-center text-cyan-300 font-semibold tracking-wide">
                {t('hero.cta')}
                <Icon
                  icon="lucide:arrow-down"
                  className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform"
                />
              </span>
            </button>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/in/emanuele-toma"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-panel hover:bg-white/10 text-slate-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
              >
                <Icon icon="simple-icons:linkedin" className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/emanuele-toma"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-panel hover:bg-white/10 text-slate-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Icon icon="simple-icons:github" className="w-6 h-6" />
              </a>
              <a
                href="/files/emanuele-toma-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-panel hover:bg-white/10 text-slate-400 hover:text-green-400 transition-all duration-300 hover:scale-110"
              >
                <Icon icon="lucide:file-text" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
