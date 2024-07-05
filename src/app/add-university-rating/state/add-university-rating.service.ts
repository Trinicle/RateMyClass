import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UniversityRatingPostRequest } from './add-university-rating.model';

@Injectable({
  providedIn: 'root',
})
export class AddUniversityRatingService {
  private url: string = 'http://localhost:5000/api/universities/';

  constructor(private http: HttpClient) {}

  post(id: number, template: UniversityRatingPostRequest) {
    this.http
      .post<UniversityRatingPostRequest>(`${this.url}${id}/ratings`, template)
      .subscribe();
  }
}
