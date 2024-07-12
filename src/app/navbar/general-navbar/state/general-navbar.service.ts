import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, map } from 'rxjs';
import { GeneralNavbarStore } from './general-navbar.store';
import { SearchCourseItem } from './general-navbar.model';
import { CoursesQuery } from '@app/course-rating/course-details/state/courses.query';

@Injectable({
  providedIn: 'root',
})
export class GeneralNavbarService {
  private url: string = 'http://localhost:5000/api/universities';

  constructor(
    private http: HttpClient,
    private generalNavbarStore: GeneralNavbarStore,
    private courseQuery: CoursesQuery
  ) {}

  get(universityId: number, course: string = '', amount: number = 0) {
    if (!course) {
      this.reset();
      return EMPTY;
    }

    this.reset();
    return this.http
      .get<SearchCourseItem[]>(
        `${this.url}/${universityId}/courses`.concat(
          `?name=${encodeURIComponent(course)}`,
          amount !== 0 ? `&amount=${amount}` : ``
        ),
        { observe: 'response' }
      )
      .pipe(
        map((response) => {
          this.courseQuery.select().subscribe((currentCourse) => {
            response.body?.map((item) => {
              if (item.name === currentCourse.name) {
                return;
              }
              const mappedItem = {
                id: item.id,
                name: item.name,
              };
              return this.generalNavbarStore.update((state) => ({
                items: [...state.items, mappedItem],
              }));
            });
          });
        })
      );
  }

  reset() {
    this.generalNavbarStore.reset();
  }
}
