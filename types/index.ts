export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image?: string;
  link?: string;
  github?: string;
  featured: boolean;
  status: "completed" | "in-progress" | "archived";
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
  current: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  year: string;
}

export interface TechCategory {
  name: string;
  items: TechItem[];
}

export interface TechItem {
  name: string;
  icon?: string;
  level: "expert" | "proficient" | "familiar";
}

export interface NavLink {
  label: string;
  href: string;
}
