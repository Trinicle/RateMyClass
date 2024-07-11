import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Course, emptyCourse } from './courses.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'course', resettable: true })
export class CoursesStore extends Store<Course> {
  constructor() {
    super(createInitialState());
  }
}

function createInitialState(): Partial<Course> {
  return emptyCourse;
}
