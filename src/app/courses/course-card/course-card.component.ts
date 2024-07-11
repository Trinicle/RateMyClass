import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Course } from '../state/courses.model';
import { ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { UniversityDetailsQuery } from '@app/university/university-details/state/university-details.query';
import { UniversityDetails } from '@app/university/university-details/state/university-details.model';
import { CourseInfoQuery, Data } from '../course-info/state/course-info.query';
import { CourseInfoService } from '../course-info/state/course-info.service';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss',
})
export class CourseCardComponent implements OnInit, OnDestroy {
  @Input({ required: true }) course!: Course;
  ratingAverage$: Observable<Data> = of();
  university$: Observable<UniversityDetails> = of();

  constructor(
    private courseInfoService: CourseInfoService,
    private courseInfoQuery: CourseInfoQuery,
    private universityDetailsQuery: UniversityDetailsQuery,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +(this.route.snapshot.paramMap.get('id') ?? 0);
    this.courseInfoService.reset();
    this.courseInfoService.get(id, this.course.id);

    this.ratingAverage$ = this.courseInfoQuery.getAverage(this.course.id);

    this.university$ = this.universityDetailsQuery.select();
  }

  ngOnDestroy(): void {
    this.courseInfoService.reset();
  }

  averageColor(rating: number, item: string) {
    if (item === 'difficulty') {
      return 120 - ((rating - 1) / 4) * 120;
    }
    return ((rating - 1) / 4) * 120;
  }

  capitalize(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }
}
