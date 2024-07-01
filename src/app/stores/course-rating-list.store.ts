import { Injectable } from '@angular/core';
import { CourseRatingList, emptyCourseRatingList } from '@app/models/course-rating.model';
import { Store, StoreConfig } from '@datorama/akita';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'rating-list', resettable: true })
export class CourseRatingListStore extends Store<CourseRatingList> {
  constructor() {
    super(createInitialState());
  }
}

function createInitialState(): Partial<CourseRatingList> {
  return emptyCourseRatingList;
}
