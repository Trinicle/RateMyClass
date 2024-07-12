import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { SearchCourseItem } from './general-navbar.model';

export interface SearchCourseItemState {
  items: SearchCourseItem[];
}

export const initialState = {
  items: [],
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'course-list', resettable: true })
export class GeneralNavbarStore extends Store<SearchCourseItemState> {
  constructor() {
    super(createInitialState());
  }
}

function createInitialState(): Partial<SearchCourseItemState> {
  return initialState;
}
