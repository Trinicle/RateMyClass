import { Injectable } from '@angular/core';
import { CourseRatingList } from '@app/models/course-rating.model';
import { CourseRatingListStore } from '@app/stores/course-rating-list.store';
import { Query } from '@datorama/akita';

@Injectable({ providedIn: 'root' })
export class CourseRatingListQuery extends Query<CourseRatingList> {

  constructor(protected override store: CourseRatingListStore) {
    super(store);
  }
}
