import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CourseRatingService } from '../state/course-rating.service';
import { CourseRatingQuery, Data } from '../state/course-rating.query';
import { Observable, of } from 'rxjs';
import { CourseRating } from '@app/courses/state/course-info.model';
import { UniversityDetails } from '@app/university/university-details/state/university-details.model';
import { UniversityDetailsQuery } from '@app/university/university-details/state/university-details.query';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CoursesQuery } from '@app/course-rating/course-details/state/courses.query';
import {
  Course,
  emptyCourse,
} from '@app/course-rating/course-details/state/courses.model';
import { CoursesService } from './state/courses.service';

@Component({
  selector: 'course-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss',
})
export class CourseDetailsComponent implements OnInit, OnDestroy {
  ratings$: Observable<Data> = of();
  university$: Observable<UniversityDetails> = of();
  course$: Observable<Course> = of();

  constructor(
    private coursesQuery: CoursesQuery,
    private courseService: CoursesService,
    private courseRatingQuery: CourseRatingQuery,
    private universityDetailsQuery: UniversityDetailsQuery,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const courseId = +(this.route.snapshot.paramMap.get('courseId') ?? 0);
    const universityId = +(
      this.route.snapshot.paramMap.get('universityId') ?? 0
    );
    this.ratings$ = this.courseRatingQuery.getAverage();
    this.university$ = this.universityDetailsQuery.select();
    this.courseService.get(universityId, courseId);
    this.course$ = this.coursesQuery.select();
  }

  ngOnDestroy(): void {}
}
