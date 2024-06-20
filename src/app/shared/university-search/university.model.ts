export interface University {
  name: string,
  country: string,
  logo: string,
  location?: {
    city: string,
    state: string,
    country: string
  },
  website: string,
}
