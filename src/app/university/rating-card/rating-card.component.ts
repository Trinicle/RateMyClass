import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { UniversityRating, } from '@app/models/university-rating.model';
import { CommonModule } from '@angular/common';
import { UniversityRatingListQuery } from '@app/query/university-rating-list.query';
import { DateFormatPipe } from "../../shared/date-format.pipe";

@Component({
    selector: 'university-rating-card',
    standalone: true,
    templateUrl: './rating-card.component.html',
    styleUrl: './rating-card.component.scss',
    imports: [CommonModule, DateFormatPipe]
})
export class RatingCardComponent implements OnInit {
  ratings$ = of([] as UniversityRating[])

  constructor(private ratingListQuery: UniversityRatingListQuery) { }

  ngOnInit(): void {
    this.ratings$ = this.ratingListQuery.selectRatings();
  }

  average(rating: UniversityRating) {
    const ratingsArr = Object.values(rating).filter(item => typeof item !== 'string')
    ratingsArr.shift();

    const average = ratingsArr.reduce((acc, curr) => acc + curr) / ratingsArr.length;
    return average.toFixed(1);
  }

  averageColor(rating: UniversityRating) {
    const average = this.average(rating);
    return (+average - 1) / 4 * 120;
  }
    

}
