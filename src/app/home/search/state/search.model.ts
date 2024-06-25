export interface University {
  id: number,
  name: string,
  address: string,
  city: string,
  state: string,
  zip: string,
  website: string,
}

export interface GetMupltipleResponse {
  count: number,
  result: University[];
}
