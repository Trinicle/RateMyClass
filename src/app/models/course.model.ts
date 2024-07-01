export interface Course {
  id: number,
  name: string
}

export interface CourseList {
  numberOfCourses: number;
  courses: Course[];
}

export const emptyCourse = {
  id: 0,
  name: ''
}

export const emptyCourseList = {
  numberOfCourses: 0,
  courses: [] as Course[]
} as CourseList
