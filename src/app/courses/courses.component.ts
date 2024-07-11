import { Component, OnDestroy, OnInit } from '@angular/core';
import { GeneralNavbarComponent } from '../navbar/general-navbar/general-navbar.component';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Course } from '../course-rating/course-details/state/courses.model';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseInfoService } from './state/course-info.service';
import { CourseInfoQuery } from './state/course-info.query';

@Component({
  selector: 'university-courses',
  standalone: true,
  imports: [GeneralNavbarComponent, CommonModule, CourseCardComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit, OnDestroy {
  courses$: Observable<Course[]> = of();

  constructor(
    private courseInfoService: CourseInfoService,
    private courseInfoQuery: CourseInfoQuery,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +(this.route.snapshot.paramMap.get('id') ?? 0);
    this.courseInfoService.get(id);

    this.courses$ = this.courseInfoQuery.select((item) => item.courses);
  }

  ngOnDestroy(): void {
    this.courseInfoService.reset();
  }
}
