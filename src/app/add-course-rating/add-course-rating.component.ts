import { Component, OnInit } from '@angular/core';
import { GeneralNavbarComponent } from '../navbar/general-navbar/general-navbar.component';
import { AddCourseRatingService } from './state/add-course-rating.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseRatingPostRequest } from './state/add-course-rating.model';
import { RatingButtonComponent } from './rating-button/rating-button.component';

@Component({
  selector: 'app-add-course-rating',
  standalone: true,
  imports: [
    GeneralNavbarComponent,
    ReactiveFormsModule,
    CommonModule,
    RatingButtonComponent,
  ],
  templateUrl: './add-course-rating.component.html',
  styleUrl: './add-course-rating.component.scss',
})
export class AddCourseRatingComponent implements OnInit {
  addCourseRatingForm = new FormGroup({
    quality: new FormControl(0, [
      Validators.required,
      Validators.min(1),
      Validators.max(5),
    ]),
    difficulty: new FormControl(0, [
      Validators.required,
      Validators.min(1),
      Validators.max(5),
    ]),
    takeAgain: new FormControl(true),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(500),
    ]),
  });

  keys: string[] = [];
  numbers: number[] = [];
  showGuidelines: boolean = false;

  constructor(
    private addCourseRatingService: AddCourseRatingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.keys = Object.keys(this.addCourseRatingForm.controls);
    this.keys.pop();
    this.keys.pop();

    this.numbers = new Array(this.keys.length).fill(0);
  }

  capitalize(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  onActiveButton(value: number, key: string) {
    this.addCourseRatingForm.patchValue({
      [key]: value,
    });
  }

  onToggleGuidelines() {
    this.showGuidelines = !this.showGuidelines;
  }

  onSubmit() {
    if (!this.addCourseRatingForm.valid) {
      return;
    }
    const template = this.addCourseRatingForm.value as CourseRatingPostRequest;

    const universityId = +(
      this.route.snapshot.paramMap.get('universityId') ?? 0
    );
    const courseId = +(this.route.snapshot.paramMap.get('courseId') ?? 0);

    this.addCourseRatingService.post(universityId, courseId, template);

    this.router.navigate([
      '/university',
      universityId,
      'course',
      courseId,
      'ratings',
    ]);
  }

  getDescriptionLength() {
    return this.addCourseRatingForm.controls['description'].value?.length;
  }

  toggleRecommend(recommend: boolean) {
    this.addCourseRatingForm.patchValue({
      takeAgain: recommend,
    });
  }
}
