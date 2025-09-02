import React, { useState, useEffect, useRef } from 'react';
import type { ExperienceItem } from '../types';
import { EXPERIENCE_DATA } from '../constants';

const TimelineItem: React.FC<{ item: ExperienceItem; isLast: boolean }> = ({ item, isLast }) => (
  <div className="relative pl-8 sm:pl-32 py-6 group">
    {/* Vertical line */}
    {!isLast && <div className="absolute top-0 left-2 sm:left-12 h-full w-0.5 bg-gray-700"></div>}
    {/* Dot */}
    <div className="absolute top-5 left-0 sm:left-10 h-4 w-4 rounded-full bg-gray-700 border-2 border-gray-900 group-hover:bg-teal-500 transition-colors duration-300"></div>
    
    <div className="flex flex-col sm:flex-row items-start mb-1 group-hover:text-white transition-colors duration-300">
      <time className="sm:absolute sm:left-0 translate-y-0.5 sm:text-right sm:pr-8 sm:w-28 text-sm text-gray-400">{item.period}</time>
      <h3 className="text-xl font-bold text-gray-200">{item.role}</h3>
    </div>
    <p className="text-teal-400 mb-2">{item.company}</p>
    <p className="text-gray-400">{item.description}</p>
  </div>
);


const Experience: React.FC = () => {
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
        id="experience" 
        ref={sectionRef}
        className={`py-20 md:py-28 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Professional Experience</h2>
        <div className="w-24 h-1 bg-teal-500 mx-auto mt-4"></div>
      </div>

      <div className="relative">
        {EXPERIENCE_DATA.map((item, index) => (
          <TimelineItem key={item.role} item={item} isLast={index === EXPERIENCE_DATA.length - 1} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
