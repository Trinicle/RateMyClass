import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ApiResponse, University } from './university.model';
import { EMPTY, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversitySearchService {
  private url: string = 'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/us-colleges-and-universities/records?select=name%2C%20address%2C%20city%2C%20state%2C%20zip%2C%20country%2C%20website&where=name%20like%20'
  //convert to .net backend using the json
  constructor(private http: HttpClient) { }

  get(university: string = '') {
    console.log(university)
    if (!university) {
      return EMPTY;
    }
    return this.http.get<ApiResponse>(
      `${this.url}%22${university}%22&limit=10`
    )
      .pipe(
        map((response) => {
          return response.results.map(item => ({
            name: item.name,
            address: item.address,
            city: item.city,
            state: item.state,
            zip: item.zip,
            country: item.country,
            website: item.website,
          }));
        })
      );
  }
}
