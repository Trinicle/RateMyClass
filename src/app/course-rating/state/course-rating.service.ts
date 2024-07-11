import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CourseRatingStore } from './course-rating.store';
import { CourseRating } from '@app/courses/state/course-info.model';

@Injectable({
  providedIn: 'root',
})
export class CourseRatingService {
  private url: string = 'http://localhost:5000/api/universities';

  constructor(
    private http: HttpClient,
    private courseRatingStore: CourseRatingStore
  ) {}

  getRatings(id: number, courseId: number) {
    this.http
      .get<CourseRating[]>(`${this.url}/${id}/courses/${courseId}/ratings`, {
        observe: 'response',
      })
      .pipe(
        map((response) => {
          this.courseRatingStore.update({
            ratings: response.body ?? [],
          });
        })
      )
      .subscribe();
  }

  reset() {
    this.courseRatingStore.reset();
  }
}
