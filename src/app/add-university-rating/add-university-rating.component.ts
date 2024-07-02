import { Component, OnInit } from '@angular/core';
import { GeneralNavbarComponent } from '../navbar/general-navbar/general-navbar.component';
import { AddUniversityRatingService } from './state/add-university-rating.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RatingCardComponent } from "./rating-card/rating-card.component";

@Component({
    selector: 'app-add-university-rating',
    standalone: true,
    templateUrl: './add-university-rating.component.html',
    styleUrl: './add-university-rating.component.scss',
    imports: [
        GeneralNavbarComponent,
        RouterLink,
        CommonModule,
        RatingCardComponent
    ]
})
export class AddUniversityRatingComponent implements OnInit {

  constructor(private addUniversityRatingService: AddUniversityRatingService) {}

  ngOnInit(): void {
    
  }
}
