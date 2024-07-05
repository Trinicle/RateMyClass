import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export interface RatingButton {
  cellHovered: number;
  cellActive: number;
  saturation: number;
}

@Component({
  selector: 'rate-university-field-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating-button.component.html',
  styleUrl: './rating-button.component.scss',
})
export class RatingButtonComponent implements OnInit {
  @Output() activeCell = new EventEmitter<number>();

  fields: string[] = [];
  ratingButton: RatingButton = {
    cellHovered: 0,
    cellActive: 0,
    saturation: 45,
  };
  numbers: number[] = [1, 2, 3, 4, 5];
  headers: string[] = ['Awful', 'Bad', 'Okay', 'Good', 'Awesome'];

  ngOnInit(): void {}

  onEnter(index: number) {
    this.ratingButton.cellHovered = index + 1;
    this.ratingButton.saturation = 75;
  }

  onLeave() {
    this.ratingButton.cellHovered = 0;
    this.ratingButton.saturation = 45;
  }

  update(value: number) {
    this.ratingButton.cellActive = value;
    this.activeCell.emit(value);
  }

  getHue() {
    if (this.ratingButton.cellHovered === 0) {
      return ((this.ratingButton.cellActive - 1) / 4) * 120;
    }
    return ((this.ratingButton.cellHovered - 1) / 4) * 120;
  }
}
