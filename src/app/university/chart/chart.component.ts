import { Component, OnInit, ViewChild } from '@angular/core';
import { RatingListQuery } from '@app/query/rating-list.query';
import { RatingListStore } from '@app/stores/rating-list.store';
import { UniversityStore } from '@app/stores/university.store';
import { ChartConfiguration, ChartData, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'university-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  standalone: true,
  imports: [BaseChartDirective],
})
export class ChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;

  average: number = 0;

  constructor(private ratingListStore: RatingListQuery) {}

  ngOnInit(): void {}

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    scales: {
      x: { min: 0, max: 5 },
      y: {},
    },
    plugins: {
      legend: {
        display: false,
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Courses',
        color: 'black',
        font: {
          size: 20,
        },
      },
    },
    elements: {
      bar: {
        borderWidth: 2,
        backgroundColor: 'black',
      },
    },
    indexAxis: 'x',
  };
  public barChartType = 'bar' as const;

  public barChartData: ChartData<'bar'> = {
    xLabels: ['Quality', 'Difficulty'],
    datasets: [{ data: [1, 4] }],
  };

  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {}

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {}
}
