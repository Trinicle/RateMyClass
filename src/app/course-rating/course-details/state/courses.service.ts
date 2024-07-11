import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

import { CoursesStore } from './course.store';
import { Course, emptyCourse } from './courses.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private url: string = 'http://localhost:5000/api/universities';

  constructor(private http: HttpClient, private coursesStore: CoursesStore) {}

  get(id: number, courseId: number) {
    this.http
      .get<Course>(`${this.url}/${id}/courses/${courseId}`, {
        observe: 'response',
      })
      .pipe(
        map((response) => {
          this.coursesStore.update((state) => {
            return response.body ?? emptyCourse;
          });
        })
      )
      .subscribe();
  }

  reset() {
    this.coursesStore.reset();
  }
}
