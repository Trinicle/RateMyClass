import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import { CoursesStore, CourseState } from './course.store';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CoursesQuery extends Query<CourseState> {
  courses$ = this.select((item) => item.courses);

  constructor(protected override store: CoursesStore) {
    super(store);
  }
}
