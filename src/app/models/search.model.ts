import { University } from "@app/models/university.model";

export interface GetMupltipleResponse<T> {
  count: number,
  result: T[];
}

export interface GetResponse<T> {
  result: T
}
