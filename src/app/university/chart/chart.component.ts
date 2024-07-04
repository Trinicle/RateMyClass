import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  ChartConfiguration,
  ChartData,
  ChartDataset,
  ChartEvent,
} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ChartService } from './state/chart.service';
import { ActivatedRoute } from '@angular/router';
import { ChartQuery } from './state/chart.query';
import { from, map, mergeMap, reduce } from 'rxjs';

@Component({
  selector: 'university-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  standalone: true,
  imports: [BaseChartDirective],
})
export class ChartComponent implements OnInit, OnDestroy {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;

  barChartType = 'bar' as const;
  chartData: number[] = [];
  chartDataColor: string[] = [];
  totalRatings: number = 1;
  constructor(
    private chartService: ChartService,
    private chartQuery: ChartQuery,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +(this.route.snapshot.paramMap.get('id') ?? 0);
    this.chartService.reset();
    this.chartService.get(id);

    this.chartQuery.getAverageList().subscribe((dataArray) => {
      this.chartData = dataArray;
      this.chartDataColor = [];
      for (const item of this.chartData) {
        if (Number.isNaN(item)) {
          this.chartDataColor.push(`rgba(255, 255, 255, .8)`);
        } else {
          var hue = ((item - 1) / 4) * 120;
          this.chartDataColor.push(`hsl(${hue}, 100%, 50%, .8)`);
        }
      }
      this.barChartData.datasets[0].data = this.chartData;
      this.barChartData.datasets[0].backgroundColor = this.chartDataColor;
      this.chart?.update();
    });
  }

  ngOnDestroy(): void {
    this.chartService.reset();
  }

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    scales: {
      x: {
        min: 0,
        max: 5,
        ticks: {
          font: {
            size: 12,
            weight: 400,
            family: 'Fira Code',
          },
          color: 'rgb(125 211 252)',
        },
        grid: {
          color: 'rgb(51 65 85)',
        },
      },
      y: {
        ticks: {
          font: {
            size: 12,
            weight: 400,
            family: 'Fira Code',
          },
          color: 'rgb(244 114 182)',
        },
        grid: {
          color: 'rgb(51 65 85)',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Ratings',
        color: 'white',
        font: {
          size: 16,
          weight: 400,
          family: 'Fira Code',
        },
      },
    },
    indexAxis: 'y',
    maintainAspectRatio: false,
  };

  public barChartData: ChartData<'bar'> = {
    yLabels: [
      'Quality',
      'Location',
      'Opportunities',
      'Facilities',
      'Internet',
      'Food',
      'Clubs',
      'Social',
      'Happiness',
      'Safety',
    ],
    datasets: [{ data: this.chartData, backgroundColor: this.chartDataColor }],
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
