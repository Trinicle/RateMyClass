import { Course } from "./course.model"

export interface University {
  id: number,
  name: string,
  address: string,
  city: string,
  state: string,
  zip: string,
  website: string,
}

export interface UniversityWithCourses {
  id: number,
  name: string,
  address: string,
  city: string,
  state: string,
  zip: string,
  website: string,
  courses: Course[]
}

export const emptyUniversitywithCourses = {
  id: 0,
  name: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  website: '',
  courses: [] as Course[]
}

export const emptyUniversity = {
  id: 0,
  name: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  website: '',
}
