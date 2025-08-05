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
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              {t('experience.title')}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">{t('experience.subtitle')}</p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-5xl mx-auto">
          {experiences.map(experience => (
            <div key={experience.company} className={`flex flex-col lg:flex-row gap-8 mb-16`}>
              {/* Company Image/Logo */}
              <div className="flex justify-center lg:justify-start">
                <div className="w-32 h-32 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                    {experience.image ? (
                      <img src={experience.image} alt={`${experience.company} logo`} className="w-24 h-24 object-contain rounded-lg" />
                    ) : (
                      <Icon icon="lucide:building" className="w-12 h-12 text-slate-400" />
                    )}
                  </div>
                </div>
              </div>

              {/* Experience Content */}
              <div className="lg:w-2/3">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-bold text-white mb-1 sm:mb-0">{experience.company}</h3>
                      {experience.website && (
                        <a
                          href={experience.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-slate-400 hover:text-blue-400 transition-colors text-sm"
                        >
                          <Icon icon="lucide:external-link" className="w-4 h-4 mr-1" />
                          {t('experience.website')}
                        </a>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="text-lg text-green-400 font-semibold mb-1 sm:mb-0">{experience.role}</h4>
                      <span className="text-slate-400 text-sm">{experience.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 mb-6 leading-relaxed">{experience.description}</p>

                  {/* Key Responsibilities */}
                  <div className="mb-6">
                    <h5 className="text-white font-semibold mb-3">{t('experience.keyResponsibilities')}</h5>
                    <ul className="space-y-2">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start">
                          <Icon icon="lucide:check" className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-400 text-sm">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="text-white font-semibold mb-3">{t('experience.technologiesUsed')}</h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map(tech => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-green-600/20 to-blue-600/20 text-green-300 text-sm rounded-full border border-green-600/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Current Status */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-full border border-green-600/30">
            <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse" />
            <span className="text-green-300 font-medium">{t('experience.currentStatus')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
