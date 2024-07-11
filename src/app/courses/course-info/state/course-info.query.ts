import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import { map } from 'rxjs';
import { CourseInfoStore, CourseRatingState } from './course-info.store';

export interface Data {
  quality: number;
  difficulty: number;
  takeAgain: number;
}

@Injectable({ providedIn: 'root' })
export class CourseInfoQuery extends Query<CourseRatingState> {
  ratings$ = this.select((item) => item.ratings);

  constructor(protected override store: CourseInfoStore) {
    super(store);
  }

  getAverage(id: number) {
    const rating$ = this.select((item) =>
      item.ratings.filter((rating) => rating.courseId === id)
    );
    return rating$.pipe(
      map((ratings) => {
        const emptyData = {
          quality: 0,
          difficulty: 0,
          takeAgain: 0,
        } as Data;
        var combinedList = ratings.reduce((acc, curr) => {
          acc.quality += curr.quality / ratings.length;
          acc.difficulty += curr.difficulty / ratings.length;
          acc.takeAgain += (curr.takeAgain ? 1 : 0) / ratings.length;
          return acc;
        }, emptyData);

        return combinedList;
      })
    );
  }
}
