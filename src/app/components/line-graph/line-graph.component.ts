import { Component, Input } from '@angular/core';
import { SpendingApiService, Spend } from '../../providers/spending/spending-api.service';
import Chart from 'chart.js/auto';
import { Category } from '../../providers/spending/spending-api.service';

@Component({
  selector: 'app-line-graph',
  standalone: true,
  imports: [],
  providers: [Category],
  templateUrl: './line-graph.component.html',
  styleUrl: './line-graph.component.scss'
})
export class LineGraphComponent {
  constructor(private readonly spendingapi: SpendingApiService) { }

  colors: string[] = ['#3628f5', '#65da42', '#f2f21f', '#ec3538', '#eb3785']

  @Input() data: Category[] = [];

  spending: Spend[] = [];
  chart: any = [];
  colorIndex: number = 0;

  get color(): string {
    let color = this.colors[this.colorIndex];
    this.colorIndex++;
    return color
  }

  ngOnInit(): void {
    this.colorIndex = 0;
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.data[0].spending.map(item => {
          return item.date.toLocaleDateString('en-US', { month: 'short' })
        }),
        datasets: this.data.map((item) => {
          return {
            label: item.categoryName,
            data: item.spending.map(item => {
              return item.amt;
            }),
            fill: false,
            // borderColor: "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0"),
            borderColor: this.color,
            tension: 0.2,
            pointStyle: 'line'
          }
        })
      },
      options: {
        scales: {
          x: {
            display: true,
            grid: { display: false },
          },
          y: {
            display: false,
            ticks: {
              stepSize: 200,
              callback: (value) => {
                return '$' + value;
              }
            },
            grid: { display: true }
          }
        }
      }
    })
  }
}
