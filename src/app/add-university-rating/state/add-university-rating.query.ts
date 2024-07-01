import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { AddUniversityRating } from './add-university-rating.model';
import { AddUniversityRatingStore } from './add-university-rating.store';

@Injectable({ providedIn: 'root' })
export class AddUniversityRatingQuery extends Query<AddUniversityRating> {
  inputs$ = this.select();

  constructor(protected override store: AddUniversityRatingStore) {
    super(store);
  }

  selectInputs() {
    return this.inputs$;
  }
}
