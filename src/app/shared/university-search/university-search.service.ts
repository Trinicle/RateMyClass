import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { University } from './university.model';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversitySearchService {
  private url: string = 'https://university-data.p.rapidapi.com/api/v2/name/'
  private headers = new HttpHeaders({
    'x-rapidapi-key': '6a9b0502cdmshea4f2924bf03035p1c9a93jsn5c9de6d2faa0',
    'x-rapidapi-host': 'university-data.p.rapidapi.com',
  })

  constructor(private http: HttpClient) { }

  get(university: string = '') {
    console.log(university)
    if (!university) {
      return EMPTY;
    }
    return this.http.get<University[]>(`${this.url}${university}`, { headers: this.headers });
  }
}
