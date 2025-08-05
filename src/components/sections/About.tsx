import { useTranslation } from '@/hooks/useTranslation';
import { Icon } from '@iconify/react';
import React from 'react';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {t('about.title')}
            </span>
          </h2>

          {/* Main Description */}
          <div className="text-lg md:text-xl text-slate-400 leading-relaxed mb-12 space-y-6">
            <p>
              {t('about.intro.passionate')} <span className="text-white font-semibold">{t('about.intro.role')}</span>{' '}
              {t('about.intro.description')}
            </p>

            <p>{t('about.description.fullStack')}</p>
          </div>

          {/* What I Do */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700">
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mx-auto">
                  <Icon icon="lucide:code" className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              <h3 className="text-white font-semibold mb-2">{t('about.whatIDo.frontend.title')}</h3>
              <p className="text-slate-400 text-sm">{t('about.whatIDo.frontend.description')}</p>
            </div>

            <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700">
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center mx-auto">
                  <Icon icon="lucide:server" className="w-6 h-6 text-green-400" />
                </div>
              </div>
              <h3 className="text-white font-semibold mb-2">{t('about.whatIDo.backend.title')}</h3>
              <p className="text-slate-400 text-sm">{t('about.whatIDo.backend.description')}</p>
            </div>

            <div className="p-6 bg-slate-800/30 rounded-lg border border-slate-700">
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mx-auto">
                  <Icon icon="lucide:cloud" className="w-6 h-6 text-purple-400" />
                </div>
              </div>
              <h3 className="text-white font-semibold mb-2">{t('about.whatIDo.devops.title')}</h3>
              <p className="text-slate-400 text-sm">{t('about.whatIDo.devops.description')}</p>
            </div>
          </div>

          {/* Personal Touch */}
          <div className="bg-slate-800/20 rounded-xl p-8 border border-slate-700">
            <p className="text-slate-400 leading-relaxed">{t('about.personalTouch')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
