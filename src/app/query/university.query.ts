import { Injectable } from '@angular/core';
import { University, emptyUniversity } from '@app/models/university.model';
import { UniversityStore } from '@app/stores/university.store';
import { Query } from '@datorama/akita';

@Injectable({ providedIn: 'root' })
export class UniversityQuery extends Query<University> {
  constructor(protected override store: UniversityStore) {
    super(store);
  }
}
