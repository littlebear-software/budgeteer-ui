import { Component } from '@angular/core';
import { SpendingApiService, Spend } from '../../providers/spending/spending-api.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-spending-graph',
  standalone: true,
  imports: [],
  templateUrl: './spending-graph.component.html',
  styleUrl: './spending-graph.component.scss'
})
export class SpendingGraphComponent {
  constructor(private readonly spendingapi: SpendingApiService) { }
  spending: Spend[] = [];
  chartOptions = {};

  chart: any = [];

  ngOnInit(): void {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ["Oct", "Nov", "Dec", "Jan", "Feb"],
        datasets: [
          {
            label: 'Spending',
            data: [Math.random() * 1000, Math.random() * 1000, Math.random() * 1000, Math.random() * 1000, Math.random() * 1000],
            fill: false,
            borderColor: 'green',
            tension: 0.2,
            pointStyle: 'line',
          }
        ]
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
            }
          }
        }
      }
    })
  }


}
