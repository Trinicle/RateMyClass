import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'add-university-rating',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './add-rating.component.html',
  styleUrl: './add-rating.component.scss',
})
export class AddRatingComponent implements OnInit {
  @Input({ required: true }) universityId!: number;

  ngOnInit(): void {}
}
