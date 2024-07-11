import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { CourseRating } from './course-info.model';

export interface CourseRatingState {
  ratings: CourseRating[];
}

export const emptyCourseRatingState = {
  ratings: [],
} as CourseRatingState;

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'course-rating-list', resettable: true })
export class CourseInfoStore extends Store<CourseRatingState> {
  constructor() {
    super(createInitialState());
  }
}

function createInitialState(): Partial<CourseRatingState> {
  return emptyCourseRatingState;
}
