import React, { useState, useEffect, useRef } from 'react';
import type { Project } from '../types';
import { PROJECTS_DATA } from '../constants';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:shadow-teal-500/20 transition-shadow duration-300 flex flex-col">
    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span key={tag} className="bg-teal-900/50 text-teal-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-gray-400 text-sm mb-6 flex-grow">{project.description}</p>
      <div className="mt-auto flex gap-4">
        {project.liveDemoUrl && (
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300"
          >
            Live Demo
          </a>
        )}
        <a
          href={project.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300"
        >
          View Code
        </a>
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.1,
        }
      );
  
      const currentRef = sectionRef.current;
      if (currentRef) {
        observer.observe(currentRef);
      }
  
      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className={`py-20 md:py-28 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
        <div className="w-24 h-1 bg-teal-500 mx-auto mt-4"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
