import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rating-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating-bar.component.html',
  styleUrl: './rating-bar.component.scss',
})
export class RatingBarComponent implements OnInit {
  @Input({ required: true }) value!: number;
  hue: number = 0;
  numbers: number[] = [1, 2, 3, 4, 5];

  ngOnInit(): void {
    this.hue = ((this.value - 1) / 4) * 120;
  }
}
