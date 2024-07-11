import { Component, OnDestroy, OnInit } from '@angular/core';
import { GeneralNavbarComponent } from '@app/navbar/general-navbar/general-navbar.component';
import { ChartComponent } from './chart/chart.component';
import { CourseRatingService } from './state/course-rating.service';
import { ActivatedRoute } from '@angular/router';
import { UniversityDetailsQuery } from '@app/university/university-details/state/university-details.query';
import { CourseDetailsComponent } from './course-details/course-details.component';

@Component({
  selector: 'course-rating',
  standalone: true,
  imports: [GeneralNavbarComponent, CourseDetailsComponent, ChartComponent],
  templateUrl: './course-rating.component.html',
  styleUrl: './course-rating.component.scss',
})
export class CourseInfoComponent implements OnInit, OnDestroy {
  constructor(
    private courseRatingService: CourseRatingService,
    private universityDetailQuery: UniversityDetailsQuery,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.universityDetailQuery.select().subscribe((university) => {
      const courseId = +(this.route.snapshot.paramMap.get('id') ?? 0);
      this.courseRatingService.getRatings(university.id, courseId);
    });
  }

  ngOnDestroy(): void {
    this.courseRatingService.reset();
  }
}
