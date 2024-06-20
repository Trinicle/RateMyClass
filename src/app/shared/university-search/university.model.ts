export interface University {
  name: string,
  address: string,
  city: string,
  state: string,
  zip: string,
  country: string,
  website: string,
}

export interface ApiResponse {
  total_count: number;
  results: University[];
}
