import { useTranslation } from '@/hooks/useTranslation';
import { Icon } from '@iconify/react';
import React from 'react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  image: string;
  website?: string;
}

const Experience: React.FC = () => {
  const { t } = useTranslation();

  // Get experiences from translations
  const translatedExperiences = JSON.parse(t('experience.items'));

  const experiences: ExperienceItem[] = translatedExperiences;

  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">{t('experience.title')}</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-500 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">{t('experience.subtitle')}</p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-cyan-500/50 to-transparent" />

          {experiences.map((experience, index) => (
            <div
              key={experience.company}
              className={`relative flex flex-col md:flex-row gap-8 mb-20 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-black shadow-[0_0_15px_rgba(0,242,255,0.5)] z-10 mt-8 md:mt-0" />

              {/* Content Card */}
              <div className="md:w-1/2 pl-8 md:pl-0 md:px-12">
                <div className="glass-card p-8 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 group">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      {experience.image ? (
                        <img
                          src={experience.image}
                          alt={`${experience.company} logo`}
                          className="w-12 h-12 object-contain rounded-lg bg-white/5 p-2"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center">
                          <Icon icon="lucide:building" className="w-6 h-6 text-cyan-400" />
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl font-bold text-white">{experience.company}</h3>
                        <h4 className="text-cyan-400 font-medium">{experience.role}</h4>
                      </div>
                    </div>
                    <span className="text-slate-500 text-sm font-mono border border-slate-700 px-2 py-1 rounded">
                      {experience.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 mb-6 leading-relaxed text-sm">{experience.description}</p>

                  {/* Responsibilities */}
                  <ul className="space-y-2 mb-6">
                    {experience.responsibilities.slice(0, 3).map((responsibility, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-300">
                        <Icon icon="lucide:chevron-right" className="w-4 h-4 text-cyan-500 mr-2 mt-0.5 shrink-0" />
                        {responsibility}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 text-cyan-300 text-xs rounded-full border border-white/10 group-hover:border-cyan-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Empty space for the other side */}
              <div className="md:w-1/2" />
            </div>
          ))}
        </div>

        {/* Current Status */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 glass-panel rounded-full animate-pulse">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
            <span className="text-green-400 font-medium tracking-wide">{t('experience.currentStatus')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
