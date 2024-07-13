import { Injectable } from '@angular/core';
import { addCoursePostRequest } from './add-course.model';
import { HttpClient } from '@angular/common/http';
import { CourseInfoQuery } from '@app/courses/state/course-info.query';
import { CourseInfoStore } from '@app/courses/state/course-info.store';
import { CourseWithRating } from '@app/courses/state/course-info.model';

@Injectable({
  providedIn: 'root',
})
export class AddCourseService {
  private url: string = 'http://localhost:5000/api/universities';

  constructor(
    private http: HttpClient,
    private courseInfoQuery: CourseInfoQuery,
    private courseInfoStore: CourseInfoStore
  ) {}

  post(id: number, template: addCoursePostRequest) {
    this.http
      .post<CourseWithRating>(`${this.url}/${id}/courses`, template)
      .subscribe((course) => {
        const mappedCourse: CourseWithRating = {
          id: course.id,
          name: course.name,
          ratings: course.ratings,
        };
        this.courseInfoStore.update((state) => ({
          courses: [...state.courses, mappedCourse],
        }));
      });
  }
}
