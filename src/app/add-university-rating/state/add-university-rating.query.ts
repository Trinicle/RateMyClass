import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

@Injectable({ providedIn: 'root' })
export class UniversityDetailsQuery extends Query<> {
  constructor(protected override store: ) {
    super(store);
  }
}
