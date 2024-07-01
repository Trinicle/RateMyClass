import { Injectable } from '@angular/core';
import { UniversityRatingList, emptyUniversityRatingList } from '@app/models/university-rating.model';
import { Store, StoreConfig } from '@datorama/akita';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'rating-list', resettable: true })
export class UniversityRatingListStore extends Store<UniversityRatingList> {
  constructor() {
    super(createInitialState());
  }
}

function createInitialState(): Partial<UniversityRatingList> {
  return emptyUniversityRatingList;
}
