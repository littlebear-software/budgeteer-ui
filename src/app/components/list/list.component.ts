import { Component, Input } from '@angular/core';
import { Transaction } from '../../providers/transactions/transactions-api.service';
import { CommonModule, NgFor } from '@angular/common';

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

}
