import { Injectable } from '@angular/core';
import { RatingList, emptyRatingList } from '@app/models/rating.model';
import { Store, StoreConfig } from '@datorama/akita';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'rating-list', resettable: true })
export class RatingListStore extends Store<RatingList> {
  constructor() {
    super(createInitialState());
  }
}

function createInitialState(): Partial<RatingList> {
  return emptyRatingList;
}
