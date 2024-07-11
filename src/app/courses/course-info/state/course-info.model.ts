export interface CourseRating {
  id: number;
  courseId: number;
  description: string;
  quality: number;
  difficulty: number;
  takeAgain: boolean;
  date: string;
}

export const emptyCourseRating = {
  id: 0,
  courseId: 0,
  description: '',
  quality: 0,
  difficulty: 0,
  takeAgain: false,
  date: '',
} as CourseRating;
