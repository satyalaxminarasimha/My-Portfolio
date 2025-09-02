import React, { useState, useEffect, useRef } from 'react';
import type { Skill } from '../types';
import { SKILLS_DATA } from '../constants';

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-teal-500/20">
    <div className="text-teal-400">{skill.icon}</div>
    <p className="mt-4 text-sm font-medium text-gray-300">{skill.name}</p>
  </div>
);

const Skills: React.FC = () => {
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
      id="skills" 
      ref={sectionRef} 
      className={`py-20 md:py-28 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">My Tech Stack</h2>
        <div className="w-24 h-1 bg-teal-500 mx-auto mt-4"></div>
      </div>

      <div className="space-y-12">
        {SKILLS_DATA.map((category) => (
          <div key={category.title}>
            <h3 className="text-2xl font-semibold text-center text-gray-200 mb-8">{category.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {category.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
