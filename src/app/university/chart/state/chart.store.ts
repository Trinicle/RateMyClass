import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { UniversityRating } from './chart.model';

export interface ChartState {
  ratings: UniversityRating[];
}

export const emptyChartState = {
  ratings: [],
} as ChartState;

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'course-list', resettable: true })
export class ChartStore extends Store<ChartState> {
  constructor() {
    super(createInitialState());
  }
}

function createInitialState(): Partial<ChartState> {
  return emptyChartState;
}
