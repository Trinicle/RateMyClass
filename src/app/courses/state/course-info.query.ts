import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import { map } from 'rxjs';
import { CourseInfoStore, CoursesWithRatingsState } from './course-info.store';

export interface Data {
  quality: number;
  difficulty: number;
  takeAgain: number;
}

@Injectable({ providedIn: 'root' })
export class CourseInfoQuery extends Query<CoursesWithRatingsState> {
  courses$ = this.select((item) => item.courses);

  constructor(protected override store: CourseInfoStore) {
    super(store);
  }

  getRatings(id: number) {
    return this.select(
      (item) => item.courses.find((course) => course.id === id)?.ratings
    );
  }

  getAverage(id: number) {
    const ratings = this.getRatings(id);
    return ratings.pipe(
      map((ratings) => {
        const emptyData = {
          quality: 0,
          difficulty: 0,
          takeAgain: 0,
        } as Data;
        if (ratings !== undefined) {
          var combinedList = ratings.reduce((acc, curr) => {
            acc.quality += curr.quality / ratings.length;
            acc.difficulty += curr.difficulty / ratings.length;
            acc.takeAgain += (curr.takeAgain ? 1 : 0) / ratings.length;
            return acc;
          }, emptyData);
          return combinedList;
        }
        return emptyData;
      })
    );
  }
}
