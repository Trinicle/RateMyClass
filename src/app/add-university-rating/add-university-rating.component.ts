import { Component, OnInit } from '@angular/core';
import { GeneralNavbarComponent } from '../navbar/general-navbar/general-navbar.component';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RatingButtonComponent } from './rating-button/rating-button.component';
import { UniversityRatingPostRequest } from './state/add-university-rating.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AddUniversityRatingService } from './state/add-university-rating.service';
import { UniversityDetailsService } from '@app/university/university-details/state/university-details.service';

@Component({
  selector: 'app-add-university-rating',
  standalone: true,
  templateUrl: './add-university-rating.component.html',
  styleUrl: './add-university-rating.component.scss',
  imports: [
    GeneralNavbarComponent,
    RatingButtonComponent,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class AddUniversityRatingComponent implements OnInit {
  addUniversityRatingForm = new FormGroup({
    quality: new FormControl(0, [
      Validators.required,
      Validators.min(1),
      Validators.max(5),
    ]),
    location: new FormControl(0, [
      Validators.required,
      Validators.min(1),
      Validators.max(5),
    ]),
    opportunities: new FormControl(0, [
      Validators.required,
      Validators.min(1),
      Validators.max(5),
    ]),
    facilities: new FormControl(0, [
      Validators.required,
      Validators.min(1),
      Validators.max(5),
    ]),
    internet: new FormControl(0, [
      Validators.required,
      Validators.min(1),
      Validators.max(5),
    ]),
    food: new FormControl(0, [
      Validators.required,
      Validators.min(1),
      Validators.max(5),
    ]),
    clubs: new FormControl(0, [
      Validators.required,
      Validators.min(1),
      Validators.max(5),
    ]),
    social: new FormControl(0, [
      Validators.required,
      Validators.min(1),
      Validators.max(5),
    ]),
    happiness: new FormControl(0, [
      Validators.required,
      Validators.min(1),
      Validators.max(5),
    ]),
    safety: new FormControl(0, [
      Validators.required,
      Validators.min(1),
      Validators.max(5),
    ]),
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
    private addUniversityRatingService: AddUniversityRatingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.keys = Object.keys(this.addUniversityRatingForm.controls);
    this.keys.pop();

    this.numbers = new Array(this.keys.length).fill(0);
  }

  capitalize(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  onActiveButton(value: number, key: string) {
    this.addUniversityRatingForm.patchValue({
      [key]: value,
    });
  }

  onToggleGuidelines() {
    this.showGuidelines = !this.showGuidelines;
  }

  onSubmit() {
    if (!this.addUniversityRatingForm.valid) {
      return;
    }
    const template = this.addUniversityRatingForm
      .value as UniversityRatingPostRequest;

    const id = +(this.route.snapshot.paramMap.get('universityId') ?? 0);

    this.addUniversityRatingService.post(id, template);

    this.router.navigate(['/university', id]);
  }

  getDescriptionLength() {
    return this.addUniversityRatingForm.controls['description'].value?.length;
  }
}
