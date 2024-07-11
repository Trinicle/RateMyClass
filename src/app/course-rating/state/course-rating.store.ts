import { Injectable } from '@angular/core';
import { CourseRating } from '@app/courses/state/course-info.model';
import { emptyCourseRatingState } from '@app/courses/state/course-info.store';
import { Store, StoreConfig } from '@datorama/akita';

export interface CourseRatingState {
  ratings: CourseRating[];
}

const emptyCourseRating = {
  ratings: [],
} as CourseRatingState;

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'course-ratings', resettable: true })
export class CourseRatingStore extends Store<CourseRatingState> {
  constructor() {
    super(createInitialState());
  }
}

function createInitialState(): Partial<CourseRatingState> {
  return emptyCourseRating;
}
