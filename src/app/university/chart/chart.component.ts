import { Component, OnInit } from '@angular/core';
import { Chart, ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { ChartService } from './chart.service';

@Component({
  selector: 'university-chart',
  templateUrl: './chart.component.html',
})
export class ChartComponent implements OnInit {
  constructor(private chartService: ChartService) {}

  ngOnInit(): void {}
}
