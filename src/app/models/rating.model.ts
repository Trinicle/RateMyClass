export interface Rating {
  id: number;
  description: string;
  quality: number;
  difficulty: number;
  takeAgain: boolean;
  date: Date;
}

export interface RatingList {
  ratings: Rating[];
}

export const emptyCourse = {
  id: 0,
  description: '',
  quality: 0,
  difficulty: 0,
  takeAgain: false,
  date: Date.now(),
};

export const emptyRatingList = {
  ratings: [] as Rating[],
};
