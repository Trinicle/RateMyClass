import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetResponse } from '@app/models/search.model';
import { UniversityWithLists, emptyUniversitywithLists } from '@app/models/university.model';
import { CourseListStore } from '@app/stores/course-list.store';
import { UniversityRatingListStore } from '@app/stores/university-rating-list.store';
import { UniversityStore } from '@app/stores/university.store';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UniversityService {
  private url: string = 'http://localhost:5000/api/universities/'
  constructor(
    private courseListStore: CourseListStore,
    private universityStore: UniversityStore,
    private universityRatingListStore: UniversityRatingListStore,
    private http: HttpClient
  ) { }

  getUniversityDetails(id: number) {
    this.http.get<GetResponse<UniversityWithLists>>(
      `${this.url}`.concat(
        `${id}?includeLists=true`
      ),
      { observe: 'response' }
    )
      .pipe(
        map((response) => response.body?.result || emptyUniversitywithLists),
        catchError(error => {
          return of(emptyUniversitywithLists)
        })
      )
      .subscribe((response: UniversityWithLists) => {
        const { courses, numberOfRatings, numberOfCourses, ratings, ...universityData } = response
        this.universityStore.update(universityData)
        this.universityRatingListStore.update(state => ({
          numberOfRatings: numberOfRatings,
          ratings: [...state.ratings, ...ratings]
        }));
        this.courseListStore.update(state => ({
          numberOfCourses: numberOfCourses,
          courses: [...state.courses, ...courses]
        }));
      });
  }

  reset() {
    this.universityStore.reset();
    this.courseListStore.reset();
    this.universityRatingListStore.reset();
  }
}
