export interface CourseRating {
  id: number;
  description: string;
  quality: number;
  difficulty: number;
  takeAgain: boolean;
  date: Date;
}

export interface CourseRatingList {
  ratings: CourseRating[];
}

export const emptyCourseRating = {
  id: 0,
  description: '',
  quality: 0,
  difficulty: 0,
  takeAgain: false,
  date: Date.now(),
};

export const emptyCourseRatingList = {
  ratings: [] as CourseRating[],
};
