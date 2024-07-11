import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { CourseRating, CourseWithRating } from './course-info.model';

export interface CoursesWithRatingsState {
  courses: CourseWithRating[];
}

export const emptyCourseRatingState = {
  courses: [],
} as CoursesWithRatingsState;

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'course-rating-list', resettable: true })
export class CourseInfoStore extends Store<CoursesWithRatingsState> {
  constructor() {
    super(createInitialState());
  }
}

function createInitialState(): Partial<CoursesWithRatingsState> {
  return emptyCourseRatingState;
}
