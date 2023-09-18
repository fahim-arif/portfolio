import { projects } from "@/modules/LandingPage/components/ProjectSection/projectsData";

export enum Category {
  All = "All",
  WebDevelopment = "Web Development",
  AppDevelopment = "App Development",
  Automation = "Automation",
}

export type Projects = typeof projects;
export type Project = Projects[number];

export interface ImageType {
  src: string;
  shadow: boolean;
  size: {
    width: number;
    height: number;
  };
}

export interface IClient {
  name: string;
  designation: string;
  review: string;
}

export interface IFAQ {
  question: string;
  answer: string;
}
