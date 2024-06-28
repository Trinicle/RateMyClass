import { Component, OnDestroy, OnInit } from '@angular/core';
import { UniversityService } from './university.service';
import { University, emptyUniversity } from '@app/models/university.model';
import { CourseList, emptyCourseList } from '@app/models/course.model';
import { ActivatedRoute } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { GeneralNavbarComponent } from '../navbar/general-navbar/general-navbar.component';

@Component({
    selector: 'app-university',
    templateUrl: './university.component.html',
    styleUrls: ['./university.component.scss'],
    standalone: true,
    imports: [GeneralNavbarComponent, ChartComponent],
})
export class UniversityComponent implements OnInit, OnDestroy {
  id: number = 0;
  university: University = emptyUniversity
  courseList: CourseList = emptyCourseList

  constructor(
    private route: ActivatedRoute,
    private universityService: UniversityService
  ) {}

  ngOnInit(): void {
    this.universityService.reset();
    this.id = +(this.route.snapshot.paramMap.get('id') ?? 0);

    this.universityService.updateUniversity(this.id);
    this.universityService.getUniversity().subscribe(data => {
      this.university = data;
    })
    this.universityService.getClasses().subscribe(data => {
      this.courseList = data;
    })
  }

  ngOnDestroy(): void {}
}
