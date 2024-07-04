import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ChartStore } from './chart.store';
import { UniversityRating } from './chart.model';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  private url: string = 'http://localhost:5000/api/universities/';

  constructor(private http: HttpClient, private chartStore: ChartStore) {}

  get(id: number) {
    this.http
      .get<UniversityRating[]>(`${this.url}${id}/ratings`, {
        observe: 'response',
      })
      .pipe(
        map((response) => {
          this.chartStore.update({
            ratings: response.body ?? [],
          });
        })
      )
      .subscribe();
  }

  reset() {
    this.chartStore.reset();
  }
}
