import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { SearchUniversityItemState, SearchUniversityStore } from './search-university.store';

@Injectable({ providedIn: 'root' })
export class SearchUniversityQuery extends Query<SearchUniversityItemState> {

  constructor(protected override store: SearchUniversityStore) {
    super(store);
  }
}
