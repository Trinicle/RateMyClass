import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import {
  UniversityDetails,
  emptyUniversityDetails,
} from './university-details.model';
import { UniversityDetailsStore } from './university-details.store';

@Injectable({
  providedIn: 'root',
})
export class UniversityDetailsService {
  private url: string = 'http://localhost:5000/api/universities/';

  constructor(
    private http: HttpClient,
    private universityDetailsStore: UniversityDetailsStore
  ) {}

  get(id: number) {
    this.http
      .get<UniversityDetails>(`${this.url}${id}?includeLists=false`, {
        observe: 'response',
      })
      .pipe(
        map((response) => {
          this.universityDetailsStore.update(
            response.body ?? emptyUniversityDetails
          );
        })
      )
      .subscribe();
  }
}
