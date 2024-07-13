import { Component, OnDestroy, OnInit } from '@angular/core';
import { GeneralNavbarComponent } from '../navbar/general-navbar/general-navbar.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Course } from '../course-rating/course-details/state/courses.model';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseInfoService } from './state/course-info.service';
import { CourseInfoQuery } from './state/course-info.query';
import { UniversityDetailsService } from '@app/university/university-details/state/university-details.service';
import { Dialog, DialogModule, DialogRef } from '@angular/cdk/dialog';
import { AddCourseComponent } from './add-course/add-course.component';

@Component({
  selector: 'university-courses',
  standalone: true,
  imports: [
    GeneralNavbarComponent,
    CommonModule,
    CourseCardComponent,
    RouterLink,
    DialogModule,
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit, OnDestroy {
  courses$: Observable<Course[]> = of();
  universityId: number = 0;

  constructor(
    private courseInfoService: CourseInfoService,
    private universityDetailsService: UniversityDetailsService,
    private courseInfoQuery: CourseInfoQuery,
    private route: ActivatedRoute,
    private dialog: Dialog
  ) {}

  ngOnInit(): void {
    this.universityId = +(
      this.route.snapshot.paramMap.get('universityId') ?? 0
    );
    this.courseInfoService.get(this.universityId);
    this.universityDetailsService.get(this.universityId);
    this.courses$ = this.courseInfoQuery.select((item) => item.courses);
  }

  ngOnDestroy(): void {
    this.courseInfoService.reset();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddCourseComponent, {
      data: { universityId: this.universityId },
    });

    dialogRef.closed.subscribe();
  }
}
