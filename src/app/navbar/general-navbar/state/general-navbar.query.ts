import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import {
  GeneralNavbarStore,
  SearchCourseItemState,
} from './general-navbar.store';

@Injectable({ providedIn: 'root' })
export class GeneralNavbarQuery extends Query<SearchCourseItemState> {
  constructor(protected override store: GeneralNavbarStore) {
    super(store);
  }
}
