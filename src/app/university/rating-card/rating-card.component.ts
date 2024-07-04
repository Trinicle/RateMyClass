import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DateFormatPipe } from '../../shared/date-format.pipe';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { ChartQuery } from '../chart/state/chart.query';
import { UniversityRating } from '../chart/state/chart.model';

@Component({
  selector: 'university-rating-card',
  standalone: true,
  templateUrl: './rating-card.component.html',
  styleUrl: './rating-card.component.scss',
  imports: [CommonModule, DateFormatPipe, RatingBarComponent],
})
export class RatingCardComponent implements OnInit {
  ratings$ = of([] as UniversityRating[]);

  constructor(private chartQuery: ChartQuery) {}

  ngOnInit(): void {
    this.ratings$ = this.chartQuery.selectRatings();
  }

  average(rating: UniversityRating) {
    const ratingsArr = Object.values(rating).filter(
      (item) => typeof item !== 'string'
    );
    ratingsArr.shift();

    const average =
      ratingsArr.reduce((acc, curr) => acc + curr) / ratingsArr.length;
    return average.toFixed(1);
  }

  averageColor(rating: UniversityRating) {
    const average = this.average(rating);
    return ((+average - 1) / 4) * 120;
  }
}
