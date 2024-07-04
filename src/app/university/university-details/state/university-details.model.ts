export interface UniversityDetails {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  website: string;
}

export const emptyUniversityDetails = {
  id: 0,
  name: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  website: '',
} as UniversityDetails