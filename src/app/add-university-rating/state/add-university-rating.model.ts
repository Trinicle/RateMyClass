export interface AddUniversityRating {
  quality: number;
  location: number;
  opportunities: number;
  facilities: number;
  internet: number;
  food: number;
  clubs: number;
  social: number;
  happiness: number;
  safety: number;
  description: string;
}

export const emptyAddUniversityRating = {
  quality: 1,
  location: 1,
  opportunities: 1,
  facilities: 1,
  internet: 1,
  food: 1,
  clubs: 1,
  social: 1,
  happiness: 1,
  safety: 1,
  description: '',
};
