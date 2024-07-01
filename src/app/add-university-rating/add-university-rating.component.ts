import { Component, OnInit } from '@angular/core';
import { GeneralNavbarComponent } from '../navbar/general-navbar/general-navbar.component';
import { AddUniversityRatingService } from './state/add-university-rating.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface Infromation {
  isHover: boolean;
  saturation: number;
}

@Component({
  selector: 'app-add-university-rating',
  standalone: true,
  templateUrl: './add-university-rating.component.html',
  styleUrl: './add-university-rating.component.scss',
  imports: [
    ReactiveFormsModule,
    GeneralNavbarComponent,
    RouterLink,
    CommonModule,
  ],
})
export class AddUniversityRatingComponent implements OnInit {
  addUniversityRatingForm = new FormGroup({
    quality: new FormControl(0),
    location: new FormControl(0),
    opportunities: new FormControl(0),
    facilities: new FormControl(0),
    internet: new FormControl(0),
    food: new FormControl(0),
    clubs: new FormControl(0),
    social: new FormControl(0),
    happiness: new FormControl(0),
    safety: new FormControl(0),
    description: new FormControl(''),
  });
  numbers: number[] = [1, 2, 3, 4, 5];
  fields: string[] = [];
  information: Infromation[] = [];

  constructor(private addUniversityRatingService: AddUniversityRatingService) {}

  ngOnInit(): void {
    this.fields = Object.keys(this.addUniversityRatingForm.controls);
    this.fields.pop();
    this.information = new Array(this.fields.length).fill({
      isHover: false,
      saturation: 50,
    } as Infromation);
  }

  onEnter(key: string, value: number) {
    var current = this.getSaturation(key);
  }

  onLeave(key: string) {}

  update(key: string, value: number) {
    this.addUniversityRatingForm.patchValue({
      [key]: value,
    });

    var index = this.fields.indexOf(key);
  }

  get(key: string) {
    return this.addUniversityRatingForm.get(key)?.value;
  }

  getHue(key: string) {
    const number = this.get(key);
    return ((number - 1) / 4) * 120;
  }

  getSaturation(key: string) {
    var index = this.fields.indexOf(key);
    return this.information[index].saturation;
  }
}
