import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { UniversityDetails, emptyUniversityDetails } from './university-details.model';


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'course-list', resettable: true })
export class UniversityDetailsStore extends Store<UniversityDetails> {
  constructor() {
    super(createInitialState());
  }
}

function createInitialState(): Partial<UniversityDetails> {
  return emptyUniversityDetails;
}
