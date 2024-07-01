import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddUniversityRatingStore } from './add-university-rating.store';
import { AddUniversityRatingQuery } from './add-university-rating.query';

@Injectable({
  providedIn: 'root',
})
export class AddUniversityRatingService {
  constructor(
    private addUniversityRatingStore: AddUniversityRatingStore,
    private addUniversityRatingQuery: AddUniversityRatingQuery,
    private http: HttpClient
  ) {}
}
