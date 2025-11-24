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
      borderColor: 'border-cyan-500',
      shadowColor: 'shadow-cyan-500/20',
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
      borderColor: 'border-green-500',
      shadowColor: 'shadow-green-500/20',
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
      borderColor: 'border-purple-500',
      shadowColor: 'shadow-purple-500/20',
    },
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">{t('skills.title')}</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-500 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">{t('skills.subtitle')}</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.key}
              className={`glass-card rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-300 group relative overflow-hidden`}
            >
              {/* Background Gradient */}
              <div
                className={`absolute top-0 right-0 w-64 h-64 bg-linear-to-br ${category.color} opacity-5 blur-[80px] rounded-full pointer-events-none group-hover:opacity-10 transition-opacity`}
              />

              {/* Category Icon and Title */}
              <div className="flex items-center mb-8 relative">
                <div
                  className={`p-4 rounded-xl bg-white/5 border border-white/10 mr-4 group-hover:scale-110 transition-transform duration-300 ${category.shadowColor} shadow-lg`}
                >
                  <Icon icon={category.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Description */}
              <p className="text-slate-400 mb-8 leading-relaxed min-h-12">{category.description}</p>

              {/* Technologies */}
              <div className="grid grid-cols-2 gap-3">
                {category.technologies.map(tech => (
                  <div
                    key={tech.name}
                    className="flex items-center p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-1"
                  >
                    <Icon icon={tech.icon} className="w-6 h-6 mr-3 shrink-0" />
                    <span className="text-slate-200 font-medium text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-20">
          <div className="inline-block p-8 glass-panel rounded-2xl max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 to-purple-500/10" />
            <p className="text-slate-300 leading-relaxed relative z-10 text-lg">
              <Icon icon="lucide:sparkles" className="inline-block w-5 h-5 text-yellow-400 mr-2 mb-1" />
              {t('skills.additionalInfo')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
