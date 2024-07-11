import { Component, OnDestroy, OnInit } from '@angular/core';
import { GeneralNavbarComponent } from '../navbar/general-navbar/general-navbar.component';
import { CoursesService } from './state/courses.service';
import { CoursesQuery } from './state/courses.query';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Course } from './state/courses.model';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card/course-card.component';

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
    private coursesService: CoursesService,
    private coursesQuery: CoursesQuery,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +(this.route.snapshot.paramMap.get('id') ?? 0);
    this.coursesService.get(id);

    this.courses$ = this.coursesQuery.select((item) => item.courses);
  }

  ngOnDestroy(): void {
    this.coursesService.reset();
  }
}
