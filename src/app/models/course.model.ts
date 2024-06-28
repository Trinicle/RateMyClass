export interface Course {
  id: number,
  name: string
}

export interface CourseList {
  courses: Course[]
}

export const emptyCourse = {
  id: 0,
  name: ''
}

export const emptyCourseList = {
  courses: [] as Course[]
}
