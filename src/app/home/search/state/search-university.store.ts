import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { SearchUniversityItem } from './search-university.model';

export interface SearchUniversityItemState {
  items: SearchUniversityItem[];
}

export const initialState = {
  items: [],
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'university-list', resettable: true })
export class SearchUniversityStore extends Store<SearchUniversityItemState> {
  constructor() {
    super(createInitialState());
  }
}

function createInitialState(): Partial<SearchUniversityItemState> {
  return initialState;
}
