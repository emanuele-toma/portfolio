import { useTranslation } from '@/hooks/useTranslation';
import { Icon } from '@iconify/react';
import React from 'react';

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      key: 'frontend',
      title: t('skills.frontend.title'),
      description: t('skills.frontend.description'),
      icon: 'lucide:monitor',
      technologies: [
        { name: 'React', icon: 'logos:react' },
        { name: 'Next.js', icon: 'logos:nextjs-icon' },
        { name: 'Astro', icon: 'vscode-icons:file-type-astro' },
        { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
        { name: 'CSS', icon: 'devicon:css3' },
        { name: 'HTML', icon: 'devicon:html5' },
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      key: 'backend',
      title: t('skills.backend.title'),
      description: t('skills.backend.description'),
      icon: 'lucide:server',
      technologies: [
        { name: 'TypeScript', icon: 'logos:typescript-icon' },
        { name: 'Hono', icon: 'logos:hono' },
        { name: 'Express', icon: 'simple-icons:express' },
        { name: 'Fastify', icon: 'simple-icons:fastify' },
        { name: 'Prisma', icon: 'simple-icons:prisma' },
        { name: 'PostgreSQL', icon: 'logos:postgresql' },
        { name: 'MongoDB', icon: 'logos:mongodb-icon' },
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      key: 'infrastructure',
      title: t('skills.infrastructure.title'),
      description: t('skills.infrastructure.description'),
      icon: 'lucide:cloud',
      technologies: [
        { name: 'Docker', icon: 'logos:docker-icon' },
        { name: 'GitHub', icon: 'mdi:github' },
        { name: 'GitLab', icon: 'vscode-icons:file-type-gitlab' },
        { name: 'Traefik', icon: 'devicon:traefikproxy' },
        { name: 'Terraform', icon: 'logos:terraform-icon' },
        { name: 'AWS', icon: 'skill-icons:aws-light' },
      ],
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t('skills.title')}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">{t('skills.subtitle')}</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map(category => (
            <div
              key={category.key}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Category Icon and Title */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20 mr-4`}>
                  <Icon icon={category.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Description */}
              <p className="text-slate-400 mb-8 leading-relaxed">{category.description}</p>

              {/* Technologies */}
              <div className="space-y-4">
                {category.technologies.map(tech => (
                  <div
                    key={tech.name}
                    className="flex items-center p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors duration-200"
                  >
                    <Icon icon={tech.icon} className="w-6 h-6 mr-3 flex-shrink-0" />
                    <span className="text-slate-200 font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>

              {/* Gradient Border Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
              />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">{t('skills.additionalInfo')}</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
