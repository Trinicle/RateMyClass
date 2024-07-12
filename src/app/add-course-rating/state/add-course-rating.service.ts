import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CourseRatingPostRequest } from './add-course-rating.model';

@Injectable({
  providedIn: 'root',
})
export class AddCourseRatingService {
  private url: string = 'http://localhost:5000/api/universities';

  constructor(private http: HttpClient) {}

  post(
    universityId: number,
    courseId: number,
    template: CourseRatingPostRequest
  ) {
    this.http
      .post<CourseRatingPostRequest>(
        `${this.url}/${universityId}/courses/${courseId}/ratings`,
        template
      )
      .subscribe();
  }
}
