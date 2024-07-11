import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import { Course } from './courses.model';
import { CoursesStore } from './course.store';

@Injectable({ providedIn: 'root' })
export class CoursesQuery extends Query<Course> {
  constructor(protected override store: CoursesStore) {
    super(store);
  }
}
