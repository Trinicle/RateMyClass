import { Injectable } from '@angular/core';
import { UniversityRatingList } from '@app/models/university-rating.model';
import { UniversityRatingListStore } from '@app/stores/university-rating-list.store';
import { Query } from '@datorama/akita';
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

export const emptyChartData = {
  quality: 0,
  location: 0,
  opportunities: 0,
  facilities: 0,
  internet: 0,
  food: 0,
  clubs: 0,
  social: 0,
  happiness: 0,
  safety: 0
} as Data

@Injectable({ providedIn: 'root' })
export class UniversityRatingListQuery extends Query<UniversityRatingList> {
  ratingList$ = this.select();
  ratings$ = this.select(item => item.ratings);

  constructor(protected override store: UniversityRatingListStore) {
    super(store);
  }

  selectRatingList() {
    return this.ratingList$;
  }

  selectRatings() {
    return this.ratings$;
  }

  getAverageList() {
    return this.ratingList$.pipe(
      map(list => {
        var combinedList = list.ratings.reduce((acc, curr) => {
 
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
          return acc
        }, emptyChartData)

        return Object.values(combinedList).map(item => item / list.numberOfRatings);
      }
      )
    );
  }
}
