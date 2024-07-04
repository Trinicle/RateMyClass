import { Component, OnDestroy, OnInit } from '@angular/core';

import { ChartComponent } from './chart/chart.component';
import { GeneralNavbarComponent } from '../navbar/general-navbar/general-navbar.component';

import { UniversityDetailsComponent } from './university-details/university-details.component';
import { RatingCardComponent } from './rating-card/rating-card.component';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss'],
  standalone: true,
  imports: [
    GeneralNavbarComponent,
    ChartComponent,
    UniversityDetailsComponent,
    RatingCardComponent,
  ],
})
export class UniversityComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
