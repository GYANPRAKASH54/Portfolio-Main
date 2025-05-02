import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight, ChevronLeft } from 'lucide-react';
import { projects } from '../data/projects';
import type { Project } from '../types';

const ProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(filter.toLowerCase())
        )
      );

  const handlePrev = () => {
    if (!activeProject) return;
    const currentIndex = projects.findIndex(p => p.id === activeProject.id);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setActiveProject(projects[prevIndex]);
  };

  const handleNext = () => {
    if (!activeProject) return;
    const currentIndex = projects.findIndex(p => p.id === activeProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setActiveProject(projects[nextIndex]);
  };

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Tech-like decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-1 bg-purple-500/50 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-40 h-1 bg-cyan-500/50 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-32 h-1 bg-purple-500/50 animate-pulse"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold inline-block relative">
            My Projects
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-400"></span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Explore my portfolio of projects showcasing my skills and expertise in web development and software testing.
          </p>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              filter === 'all' 
                ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-glow-sm' 
                : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
          >
            All
          </button>
          {['React', 'Api-Testing', 'API'].map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                filter === tech 
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-glow-sm' 
                  : 'bg-gray-800 text-gray-400 hover:text-white'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-glow-sm"
              onClick={() => setActiveProject(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10 opacity-60"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-purple-500/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                
                {/* Cyberpunk scanline effect */}
                <div className="absolute inset-0 bg-scanlines opacity-10 z-20"></div>
                
                {/* Glitch effect on hover */}
                <div className="absolute inset-0 bg-cyan-500/30 mix-blend-overlay z-10 opacity-0 group-hover:animate-glitch-1"></div>
              </div>
              
              <div className="p-6 relative">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="inline-block px-2 py-1 text-xs bg-gray-800 text-cyan-400 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button
                  className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-2 transition-colors"
                >
                  View Details
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Project Modal */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative bg-gray-900 border border-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scaleUp">
            <button 
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-20"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="relative h-64 md:h-80">
              <img 
                src={activeProject.image} 
                alt={activeProject.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              
              {/* Navigation controls */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-purple-600 p-2 rounded-full text-white transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-purple-600 p-2 rounded-full text-white transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold text-white mb-4">{activeProject.title}</h2>
              <p className="text-gray-300 mb-6">{activeProject.description}</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {activeProject.link && (
                  <a 
                    href={activeProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-full inline-flex items-center gap-2 hover:shadow-glow-cyan transition-all"
                  >
                    <ExternalLink size={16} />
                    Visit Project
                  </a>
                )}
                
                {activeProject.github && (
                  <a 
                    href={activeProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-gray-800 text-white rounded-full inline-flex items-center gap-2 hover:bg-gray-700 transition-colors"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;