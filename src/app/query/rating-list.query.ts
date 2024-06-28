import { Injectable } from '@angular/core';
import { RatingList } from '@app/models/rating.model';
import { RatingListStore } from '@app/stores/rating-list.store';
import { Query } from '@datorama/akita';

@Injectable({ providedIn: 'root' })
export class RatingListQuery extends Query<RatingList> {
  constructor(protected override store: RatingListStore) {
    super(store);
  }
}
