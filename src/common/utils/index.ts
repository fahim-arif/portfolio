import {
  projects,
  projectsGerman,
} from "@/modules/LandingPage/components/ProjectSection/projectsData";
import { Projects } from "../types";

// Using the Fisher-Yates (also known as Durstenfeld) shuffle algorithm to shuffle the array
const shuffleItems = (items: Projects) => {
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
};

// Get 3 random unique projects
export const getRandomProjects = (num: number, isEnglish: boolean) => {
  const shuffledProjects = shuffleItems(
    isEnglish ? [...projects] : [...projectsGerman]
  );
  return shuffledProjects.slice(0, num);
};
