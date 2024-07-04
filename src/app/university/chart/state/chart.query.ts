import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { ChartState, ChartStore } from './chart.store';
import { map } from 'rxjs';

export interface Data {
  quality: number;
  location: number;
  opportunities: number;
  facilities: number;
  internet: number;
  food: number;
  clubs: number;
  social: number;
  happiness: number;
  safety: number;
}

@Injectable({ providedIn: 'root' })
export class ChartQuery extends Query<ChartState> {
  ratingList$ = this.select();
  ratings$ = this.select((item) => item.ratings);

  constructor(protected override store: ChartStore) {
    super(store);
  }

  selectRatings() {
    return this.ratings$;
  }

  getAverageList() {
    return this.ratings$.pipe(
      map((ratings) => {
        const emptyChartData = {
          quality: 0,
          location: 0,
          opportunities: 0,
          facilities: 0,
          internet: 0,
          food: 0,
          clubs: 0,
          social: 0,
          happiness: 0,
          safety: 0,
        } as Data;
        var combinedList = ratings.reduce((acc, curr) => {
          acc.quality += curr.quality;
          acc.location += curr.location;
          acc.opportunities += curr.opportunities;
          acc.facilities += curr.facilities;
          acc.internet += curr.internet;
          acc.food += curr.food;
          acc.clubs += curr.clubs;
          acc.social += curr.social;
          acc.happiness += curr.happiness;
          acc.safety += curr.safety;
          return acc;
        }, emptyChartData);

        return Object.values(combinedList).map((item) => item / ratings.length);
      })
    );
  }
}
