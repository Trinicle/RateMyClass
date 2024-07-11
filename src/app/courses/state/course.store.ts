import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Course } from './courses.model';

export interface CourseState {
  courses: Course[];
}

export const emptyCourseState = {
  courses: [],
} as CourseState;

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'course-list', resettable: true })
export class CoursesStore extends Store<CourseState> {
  constructor() {
    super(createInitialState());
  }
}

function createInitialState(): Partial<CourseState> {
  return emptyCourseState;
}
