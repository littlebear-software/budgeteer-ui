import { Component, Input } from '@angular/core';
import { SpendingApiService, Spending } from '../../providers/spending/spending-api.service';
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

  @Input() data: Category[] = [];

  spending: Spending[] = [];
  chart: any = [];
  colorIndex: number = 0;

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
            label: item.name,
            data: item.spending.map(item => {
              return item.amt;
            }),
            fill: false,
            borderColor: item.color,
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
            display: true,
            ticks: {
              stepSize: 200,
              callback: (value) => {
                return '$' + value;
              }
            },
            grid: { display: false }
          }
        },
        plugins: {
          legend: {
            display: false,
            labels: {
              color: 'white',
            }
          }
        }
      }
    })
  }
}
