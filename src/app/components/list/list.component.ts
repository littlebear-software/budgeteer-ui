import { Component, Input } from '@angular/core';
import { Transaction } from '../../providers/transactions/transactions-api.service';
import { CommonModule, NgFor } from '@angular/common';
import * as _ from 'lodash';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  @Input() data: Transaction[] = [];
  months: _.Dictionary<Transaction[]> = {};

  ngOnInit() {
    this.months = _.groupBy(this.data, item => {
      return new Date(item.date).toLocaleString('en-US', { month: 'short', year: 'numeric' });
    })
  }

}
