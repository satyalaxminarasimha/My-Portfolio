
import type React from 'react';

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  image: string;
  title: string;
  description: string;
  tags: string[];
  liveDemoUrl?: string;
  codeUrl: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}
