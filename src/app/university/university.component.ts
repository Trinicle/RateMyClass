import { Component, OnDestroy, OnInit } from '@angular/core';
import { UniversityService } from './university.service';
import { University, emptyUniversity } from '@app/models/university.model';
import { CourseList, emptyCourseList } from '@app/models/course.model';
import { ActivatedRoute } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { GeneralNavbarComponent } from '../navbar/general-navbar/general-navbar.component';
import {
  UniversityRatingList,
  emptyUniversityRatingList,
} from '@app/models/university-rating.model';
import { UniversityDetailsComponent } from './university-details/university-details.component';
import { RatingCardComponent } from './rating-card/rating-card.component';
import { of } from 'rxjs';
import { UniversityQuery } from '@app/query/university.query';
import { AddRatingComponent } from './add-rating/add-rating.component';

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
    AddRatingComponent,
  ],
})
export class UniversityComponent implements OnInit, OnDestroy {
  id: number = 0;
  courseList$ = of(emptyCourseList);

  constructor(
    private route: ActivatedRoute,
    private universityService: UniversityService,
    private universityQuery: UniversityQuery
  ) {}

  ngOnInit(): void {
    this.universityService.reset();
    this.id = +(this.route.snapshot.paramMap.get('id') ?? 0);

    this.universityService.getUniversityDetails(this.id);
  }

  ngOnDestroy(): void {}
}
