export interface PersonalInfo {
  name: string
  title: string
  role: string
  experience: string
  location: string
  email: string
  phone: string
  linkedin: string
}

export interface Experience {
  company: string
  role: string
  location: string
  startDate: string
  endDate: string
  description: string
  responsibilities: string[]
}

export interface SkillCategory {
  label: string
  description: string
  skills: string[]
}

export interface Project {
  name: string
  company?: string
  period?: string
  type: string
  description: string
  technologies: string[]
  highlights?: string[]
  features?: string[]
}

export interface Achievement {
  title: string
  description: string
}

export interface Education {
  degree: string
  institution: string
  location: string
  startDate?: string
  endDate?: string
  year?: string
  grade: string
}

export interface Language {
  name: string
  proficiency: string
}