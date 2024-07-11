import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

import { CourseRating } from './course-info.model';
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

  get(id: number, courseId: number) {
    this.http
      .get<CourseRating[]>(`${this.url}/${id}/courses/${courseId}/ratings`, {
        observe: 'response',
      })
      .pipe(
        map((response) => {
          response.body?.map((item) => {
            item.courseId = courseId;
            this.courseInfoStore.update((state) => ({
              ratings: [...state.ratings, item],
            }));
          });
        })
      )
      .subscribe();
  }

  reset() {
    this.courseInfoStore.reset();
  }
}
