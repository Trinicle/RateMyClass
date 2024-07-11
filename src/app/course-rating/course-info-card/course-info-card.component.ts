import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CourseInfoQuery } from '../../courses/state/course-info.query';
import { CourseInfoService } from '../../courses/state/course-info.service';

@Component({
  selector: 'course-info-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-info-card.component.html',
  styleUrl: './course-info-card.component.scss',
})
export class CourseInfoCardComponent implements OnInit, OnDestroy {
  constructor(
    private courseInfoService: CourseInfoService,
    private courseInfoQuery: CourseInfoQuery
  ) {}
  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
