import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CourseInfoQuery } from '../../courses/state/course-info.query';
import { CourseInfoService } from '../../courses/state/course-info.service';
import { ChartConfiguration, ChartData, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ActivatedRoute } from '@angular/router';
import { CourseRatingQuery } from '../state/course-rating.query';

@Component({
  selector: 'course-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent implements OnInit, OnDestroy {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;

  barChartType = 'bar' as const;
  chartData: number[] = [];
  chartDataColor: string[] = [];
  totalRatings: number = 1;

  constructor(
    private courseRatingQuery: CourseRatingQuery,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.courseRatingQuery.getAverage().subscribe((data) => {
      this.chartData = [data.difficulty, data.quality];
      this.chartDataColor = [];
      this.chartData.forEach((item, index) => {
        if (Number.isNaN(this.chart)) {
          this.chartDataColor.push(`rgba(255, 255, 255, .8)`);
        } else {
          var hue = ((item - 1) / 4) * 120;
          if (index === 0) {
            this.chartDataColor.push(`hsl(${120 - hue}, 100%, 50%, .8)`);
          } else {
            this.chartDataColor.push(`hsl(${hue}, 100%, 50%, .8)`);
          }
        }
      });

      this.barChartData.datasets[0].data = this.chartData;
      this.barChartData.datasets[0].backgroundColor = this.chartDataColor;
      this.chart?.update();
    });
  }

  ngOnDestroy(): void {}

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
    yLabels: ['Difficulty', 'Quality'],
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
