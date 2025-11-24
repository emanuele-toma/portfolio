import { useTranslation } from '@/hooks/useTranslation';
import { Icon } from '@iconify/react';
import React from 'react';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  demo?: string | null;
  github?: string;
  image: string;
}

const Projects: React.FC = () => {
  const { t } = useTranslation();

  // Get projects from translations
  const translatedProjects = JSON.parse(t('projects.items'));

  const projects: Project[] = translatedProjects;

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">{t('projects.title')}</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-500 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">{t('projects.subtitle')}</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group glass-card rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(112,0,255,0.3)] transition-all duration-500 flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.name} screenshot`}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    <div className="w-full h-full bg-linear-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                      <Icon
                        icon="lucide:code"
                        className="w-16 h-16 text-slate-600 group-hover:text-purple-500 transition-colors"
                      />
                    </div>
                  )}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-xs">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <Icon icon="simple-icons:github" className="w-6 h-6" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-purple-600/80 hover:bg-purple-600 text-white transition-all hover:scale-110 shadow-[0_0_15px_rgba(112,0,255,0.5)]"
                      aria-label={`View ${project.name} demo`}
                    >
                      <Icon icon="lucide:external-link" className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.name}
                </h3>

                <p className="text-slate-400 mb-6 leading-relaxed text-sm flex-1">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 text-purple-300 text-xs rounded-full border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/emanuele-toma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 glass-panel rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300 group"
          >
            <Icon icon="simple-icons:github" className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            {t('projects.viewAllProjects')}
            <Icon icon="lucide:arrow-right" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
