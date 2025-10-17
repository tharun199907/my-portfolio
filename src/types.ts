import React from "react";

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveLink?: string;
  repoLink?: string;
}

export interface Skill {
  id: string;
  name: string;
  icon?: React.ReactNode;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}
