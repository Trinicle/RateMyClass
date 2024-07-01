import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import {
  AddUniversityRating,
  emptyAddUniversityRating,
} from './add-university-rating.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'course-list', resettable: true })
export class AddUniversityRatingStore extends Store<AddUniversityRating> {
  constructor() {
    super(createInitialState());
  }
}

function createInitialState(): Partial<AddUniversityRating> {
  return emptyAddUniversityRating;
}
