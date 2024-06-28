import { Component, OnInit } from '@angular/core';
import { ChartService } from './chart.service';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  standalone: true,
  imports: [BaseChartDirective],
  selector: 'university-chart',
  templateUrl: './chart.component.html',
})
export class ChartComponent implements OnInit {
  constructor(private chartService: ChartService) {}

  ngOnInit(): void {}
}
