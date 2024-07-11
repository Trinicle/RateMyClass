import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

import { CourseRating, CourseWithRating } from './course-info.model';
import { CourseInfoStore } from './course-info.store';

@Injectable({
  providedIn: 'root',
})
export class CourseInfoService {
  private url: string = 'http://localhost:5000/api/universities';

  constructor(
    private http: HttpClient,
    private courseInfoStore: CourseInfoStore
  ) {}

  get(id: number) {
    this.http
      .get<CourseWithRating[]>(
        `${this.url}/${id}/courses?includeRatings=true`,
        {
          observe: 'response',
        }
      )
      .pipe(
        map((response) => {
          this.courseInfoStore.update({
            courses: response.body ?? [],
          });
        })
      )
      .subscribe();
  }

  reset() {
    this.courseInfoStore.reset();
  }
}
