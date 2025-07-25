import { type IconType } from "react-icons";

export interface SidebarItem {
  path: string;
  label: string;
  icon: IconType;
  badge?: string;
}

export interface User {
  name: string;
  title: string;
  avatar?: string;
  initials: string;
}

export interface Job {
  id: number;
  title: string;
  company: string;
  logo: string;
  logoColor: string;
  location: string;
  experience: string;
  salary: string;
  type: string;
  remote: string;
  posted: string;
  match: number;
  status: 'GREAT' | 'AVERAGE' | 'POOR';
  connections: string;
  salaryNote?: string;
  actionText: string;
  growthOpportunities: boolean;
  activelyHiring: boolean;
  applied: boolean;
  appliedTime?: string;
  [key: string]: any;
}

export type FilterState = Record<string, Set<string>>;

export interface ProfileErrors {
  [key: string]: string;
}

export const JobStatus = {
  GREAT: "GREAT",
  AVERAGE: "AVERAGE",
  POOR: "POOR",
} as const;

export type JobStatus = typeof JobStatus[keyof typeof JobStatus];

export interface JobDetailsData {
  id: number;
  title: string;
  company: string;
  logo?: string;
  rating: number;
  reviews: string;
  location: string;
  experience: string;
  salary: string;
  type: string;
  remote: string;
  connections: string;
  salaryNote: string;
  actionText: string;
  posted: string;
  postedBy: string;
  openings: string;
  applicants: string;
  match: number;
  status: JobStatus;
  about: string;
  jobDetails: string[];
  growthOpportunities: boolean;
  activelyHiring: boolean;
  requiredQualifications: {
    skills: string[];
    details: string[];
  };
  additionalQualifications: string[];
  tags: string[];
}

export type UserProfile = {
  name: string;
  email: string;
  photo: string;
  skills: string[];
  bio: string;
  linkedinUrl?: string;
  location?: string;
  phone?: string;
  company?: string;
  experience?: string;
  title?: string;
};

export interface Message {
  role: 'user' | 'bot';
  text: string;
  timestamp?: Date;
}

export interface ChatbotConfig {
  suggestions: string[];
  botName: string;
  botTitle: string;
  placeholder: string;
}