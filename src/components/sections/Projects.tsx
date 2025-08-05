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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t('projects.title')}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">{t('projects.subtitle')}</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-slate-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.name} screenshot`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Icon icon="lucide:code" className="w-16 h-16 text-slate-400" />
                  )}
                </div>
                {/* Placeholder for project image */}
                <div className="absolute bottom-0 right-0 p-4">
                  <div className="flex space-x-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-800/80 backdrop-blur-sm rounded-full hover:bg-slate-700 transition-colors"
                        aria-label={`View ${project.name} on GitHub`}
                      >
                        <Icon icon="simple-icons:github" className="w-5 h-5 text-slate-300" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-800/80 backdrop-blur-sm rounded-full hover:bg-slate-700 transition-colors"
                        aria-label={`View ${project.name} demo`}
                      >
                        <Icon icon="lucide:external-link" className="w-5 h-5 text-slate-300" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.name}
                </h3>

                <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white rounded-lg transition-colors duration-200"
                    >
                      <Icon icon="simple-icons:github" className="w-4 h-4 mr-2" />
                      {t('projects.viewCode')}
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all duration-200"
                    >
                      <Icon icon="lucide:external-link" className="w-4 h-4 mr-2" />
                      {t('projects.liveDemo')}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/emanuele-toma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors duration-200 border border-slate-600 hover:border-slate-500"
          >
            <Icon icon="simple-icons:github" className="w-5 h-5 mr-2" />
            {t('projects.viewAllProjects')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
