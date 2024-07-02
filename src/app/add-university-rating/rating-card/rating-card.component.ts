import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RatingButtonComponent } from "./rating-button/rating-button.component";

@Component({
    selector: 'university-rating-card',
    standalone: true,
    templateUrl: './rating-card.component.html',
    styleUrl: './rating-card.component.scss',
    imports: [ReactiveFormsModule, CommonModule, RatingButtonComponent]
})
export class RatingCardComponent implements OnInit{

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

  keys: string[] = [];
  numbers: number[] = [];

  constructor() {}

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
      [key]: value
    });
  }
  
}
