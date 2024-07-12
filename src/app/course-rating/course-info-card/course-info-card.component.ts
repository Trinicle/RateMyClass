import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DateFormatPipe } from '../../shared/date-format.pipe';
import { CourseRating } from '@app/courses/state/course-info.model';

@Component({
  selector: 'course-info-card',
  standalone: true,
  imports: [CommonModule, DateFormatPipe],
  templateUrl: './course-info-card.component.html',
  styleUrl: './course-info-card.component.scss',
})
export class CourseInfoCardComponent implements OnInit, OnDestroy {
  @Input({ required: true }) rating!: CourseRating;

  constructor() {}
  ngOnInit(): void {}
  ngOnDestroy(): void {}

  averageColor(rating: number, key: string) {
    if (key === 'difficulty') {
      return 120 - ((+rating - 1) / 4) * 120;
    }
    return ((+rating - 1) / 4) * 120;
  }
}
