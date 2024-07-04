export interface UniversityRating {
  id: number;
  description: string;
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
  date: string;
}

export const emptyUniversityRating = {
  id: 0,
  description: '',
  quality: 0,
  location: 0,
  opportunities: 0,
  facilities: 0,
  internet: 0,
  food: 0,
  clubs: 0,
  social: 0,
  happiness: 0,
  safety: 0,
  date: '',
} as UniversityRating;
