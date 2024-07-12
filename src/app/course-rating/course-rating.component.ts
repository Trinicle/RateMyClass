import { Component, OnDestroy, OnInit } from '@angular/core';
import { GeneralNavbarComponent } from '@app/navbar/general-navbar/general-navbar.component';
import { ChartComponent } from './chart/chart.component';
import { CourseRatingService } from './state/course-rating.service';
import { ActivatedRoute } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { UniversityDetailsService } from '@app/university/university-details/state/university-details.service';
import { CourseRatingQuery } from './state/course-rating.query';
import { Observable, of } from 'rxjs';
import { CourseRating } from '@app/courses/state/course-info.model';
import { CommonModule } from '@angular/common';
import { CourseInfoCardComponent } from './course-info-card/course-info-card.component';

@Component({
  selector: 'course-rating',
  standalone: true,
  imports: [
    GeneralNavbarComponent,
    CourseDetailsComponent,
    ChartComponent,
    CommonModule,
    CourseInfoCardComponent,
  ],
  templateUrl: './course-rating.component.html',
  styleUrl: './course-rating.component.scss',
})
export class CourseInfoComponent implements OnInit, OnDestroy {
  ratings$: Observable<CourseRating[]> = of();

  constructor(
    private courseRatingService: CourseRatingService,
    private universityDetailsSerivce: UniversityDetailsService,
    private courseRatingQuery: CourseRatingQuery,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const universityId = +(
      this.route.snapshot.paramMap.get('universityId') ?? 0
    );
    this.universityDetailsSerivce.get(universityId);
    const courseId = +(this.route.snapshot.paramMap.get('courseId') ?? 0);
    this.courseRatingService.getRatings(universityId, courseId);
    this.ratings$ = this.courseRatingQuery.getRatings();
  }

  ngOnDestroy(): void {
    this.courseRatingService.reset();
  }
}
