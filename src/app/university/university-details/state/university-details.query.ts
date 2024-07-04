import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { UniversityDetailsStore } from './university-details.store';
import { UniversityDetails } from './university-details.model';

@Injectable({ providedIn: 'root' })
export class UniversityDetailsQuery extends Query<UniversityDetails> {
  constructor(protected override store: UniversityDetailsStore) {
    super(store);
  }
}
