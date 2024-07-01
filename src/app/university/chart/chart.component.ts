import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartDataset, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { from, map, mergeMap, reduce } from 'rxjs';
import { UniversityService } from '../university.service';
import { UniversityRatingListQuery } from '@app/query/university-rating-list.query';

@Component({
  selector: 'university-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  standalone: true,
  imports: [BaseChartDirective],
})
export class ChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;

  barChartType = 'bar' as const
  chartData: number[] = [];
  chartDataColor: string[] = [];
  totalRatings: number = 1;
  constructor(private ratingListQuery: UniversityRatingListQuery) { }

  ngOnInit(): void {
    this.ratingListQuery.getAverageList().subscribe(dataArray => {
      this.chartData = dataArray;
      this.chartDataColor = [];
      for (const item of this.chartData) {
        if (Number.isNaN(item)) {
          this.chartDataColor.push(`rgba(255, 255, 255, .8)`)
        } else {
          var hue = (item - 1) / 4 * 120
          this.chartDataColor.push(`hsl(${hue}, 100%, 50%, .8)`)
        }
      }
      this.barChartData.datasets[0].data = this.chartData;
      this.barChartData.datasets[0].backgroundColor = this.chartDataColor;
      this.chart?.update();
    });
  }

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    scales: {
      x: {
        min: 0,
        max: 5,
        ticks: {
          font: {
            size: 12,
            weight: 600
          },
          color: 'black'
        }
      },
      y: {
        ticks: {
          font: {
            size: 12,
            weight: 600
          },
          color: 'black',
        }
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Ratings',
        color: 'black',
        font: {
          size: 16,
          weight: 800
        },
      },
    },
    indexAxis: 'y',
    maintainAspectRatio: false,
  };

  public barChartData: ChartData<'bar'> = {
    yLabels: ['Quality', 'Location', 'Opportunities', 'Facilities', 'Internet', 'Food', 'Clubs', 'Social', 'Happiness', 'Safety'],
    datasets: [{ data: this.chartData, backgroundColor: this.chartDataColor }],
  };

  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void { }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void { }
}
