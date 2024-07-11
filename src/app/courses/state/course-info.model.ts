export interface CourseWithRating {
  id: number;
  name: string;
  ratings: CourseRating[];
}

export interface CourseRating {
  id: number;
  description: string;
  quality: number;
  difficulty: number;
  takeAgain: boolean;
  date: string;
}

export const emptyCourseRating = {
  id: 0,
  description: '',
  quality: 0,
  difficulty: 0,
  takeAgain: false,
  date: '',
} as CourseRating;
