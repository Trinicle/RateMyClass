import { Course } from "./course.model"
import { UniversityRating } from "./university-rating.model"

export interface University {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  website: string;
}

export interface UniversityWithLists {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  website: string;
  numberOfCourses: number;
  numberOfRatings: number;
  courses: Course[];
  ratings: UniversityRating[];
}

export const emptyUniversitywithLists = {
  id: 0,
  name: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  website: '',
  numberOfCourses: 0,
  numberOfRatings: 0,
  courses: [] as Course[],
  ratings: [] as UniversityRating[]
} as UniversityWithLists

export const emptyUniversity = {
  id: 0,
  name: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  website: '',
} as University
