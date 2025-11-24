import { useTranslation } from '@/hooks/useTranslation';
import { Icon } from '@iconify/react';
import React from 'react';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">{t('about.title')}</span>
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-cyan-500 to-purple-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Main Description */}
            <div className="glass-card p-8 rounded-2xl space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                {t('about.intro.passionate')}{' '}
                <span className="text-cyan-400 font-semibold">{t('about.intro.role')}</span>{' '}
                {t('about.intro.description')}
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">{t('about.description.fullStack')}</p>
              <div className="pt-4">
                <div className="h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent mb-6" />
                <p className="text-slate-400 italic">"{t('about.personalTouch')}"</p>
              </div>
            </div>

            {/* Visual/Stats or Image placeholder */}
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-cyan-500/20 to-purple-600/20 blur-3xl rounded-full" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="glass-card p-6 rounded-2xl text-center transform translate-y-8">
                  <Icon icon="lucide:code-2" className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
                  <h3 className="text-white font-bold text-xl">Clean Code</h3>
                </div>
                <div className="glass-card p-6 rounded-2xl text-center">
                  <Icon icon="lucide:zap" className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
                  <h3 className="text-white font-bold text-xl">Fast</h3>
                </div>
                <div className="glass-card p-6 rounded-2xl text-center transform translate-y-8">
                  <Icon icon="lucide:layout" className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                  <h3 className="text-white font-bold text-xl">Responsive</h3>
                </div>
                <div className="glass-card p-6 rounded-2xl text-center">
                  <Icon icon="lucide:shield-check" className="w-10 h-10 text-green-400 mx-auto mb-3" />
                  <h3 className="text-white font-bold text-xl">Secure</h3>
                </div>
              </div>
            </div>
          </div>

          {/* What I Do */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl group hover:bg-white/5 transition-all duration-300">
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full group-hover:bg-blue-500/30 transition-colors" />
                <Icon icon="lucide:code" className="relative w-12 h-12 text-blue-400 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">{t('about.whatIDo.frontend.title')}</h3>
              <p className="text-slate-400 text-center leading-relaxed">{t('about.whatIDo.frontend.description')}</p>
            </div>

            <div className="glass-card p-8 rounded-2xl group hover:bg-white/5 transition-all duration-300 transform md:-translate-y-4">
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full group-hover:bg-green-500/30 transition-colors" />
                <Icon icon="lucide:server" className="relative w-12 h-12 text-green-400 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">{t('about.whatIDo.backend.title')}</h3>
              <p className="text-slate-400 text-center leading-relaxed">{t('about.whatIDo.backend.description')}</p>
            </div>

            <div className="glass-card p-8 rounded-2xl group hover:bg-white/5 transition-all duration-300">
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full group-hover:bg-purple-500/30 transition-colors" />
                <Icon icon="lucide:cloud" className="relative w-12 h-12 text-purple-400 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">{t('about.whatIDo.devops.title')}</h3>
              <p className="text-slate-400 text-center leading-relaxed">{t('about.whatIDo.devops.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
