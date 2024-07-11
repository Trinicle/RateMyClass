import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

import { CoursesStore } from './course.store';
import { Course } from './courses.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private url: string = 'http://localhost:5000/api/universities';

  constructor(private http: HttpClient, private coursesStore: CoursesStore) {}

  get(id: number) {
    this.http
      .get<Course[]>(`${this.url}/${id}/courses?includeRatings=false`, {
        observe: 'response',
      })
      .pipe(
        map((response) => {
          this.coursesStore.update({
            courses: response.body ?? [],
          });
        })
      )
      .subscribe();
  }

  reset() {
    this.coursesStore.reset();
  }
}
