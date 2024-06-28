import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetResponse } from '@app/models/search.model';
import { UniversityWithCourses, emptyUniversitywithCourses } from '@app/models/university.model';
import { CourseListQuery } from '@app/query/course-list.query';
import { UniversityQuery } from '@app/query/university.query';
import { CourseListStore } from '@app/stores/course-list.store';
import { UniversityStore } from '@app/stores/university.store';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UniversityService {
  private url: string = 'http://localhost:5000/api/universities/'
  constructor(
    private courseListStore: CourseListStore,
    private courseListQuery: CourseListQuery,
    private universityStore: UniversityStore,
    private universityQuery: UniversityQuery,
    private http: HttpClient
  ) {}

  updateUniversity(id: number) {
    this.http.get<GetResponse<UniversityWithCourses>>(
      `${this.url}`.concat(
        `${id}?includeCourses=true`
      ),
      { observe: 'response' }
    )
    .pipe(
      map((response) => response.body?.result || emptyUniversitywithCourses),
      catchError(error => {
        return of(emptyUniversitywithCourses)
      })
    )
    .subscribe((response: UniversityWithCourses) => {
      const { courses, ...universityData } = response

      this.universityStore.update(universityData)
      this.courseListStore.update(state => ({
        courses: [...state.courses, ...courses]
      }));
    });
  }

  reset() {
    this.universityStore.reset();
    this.courseListStore.reset();
  }

  getUniversity() {
    return this.universityQuery.select()
  }

  getClasses() {
    return this.courseListQuery.select();
  }
}
