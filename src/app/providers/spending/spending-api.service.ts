import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Transaction } from '../transactions/transactions-api.service';

@Injectable({
  providedIn: 'root'
})
export class SpendingApiService {

  constructor() { }

  getSpendingByCategory(): Observable<Category[]> {
    return of([
      {
        name: "Entertainment",
        color: '#BB6464',
        spending: [
          { date: new Date(2023, 9, 1), amt: Math.random() * 1000 },
          { date: new Date(2023, 10, 1), amt: Math.random() * 1000 },
          { date: new Date(2023, 11, 1), amt: Math.random() * 1000 },
          { date: new Date(2024, 0, 1), amt: Math.random() * 1000 },
          { date: new Date(2024, 1, 1), amt: Math.random() * 1000 }
        ],
        transactions: []
      },
      {
        name: "Dining",
        color: '#9DBC98',
        spending: [
          { date: new Date(2023, 9, 1), amt: Math.random() * 1000 },
          { date: new Date(2023, 10, 1), amt: Math.random() * 1000 },
          { date: new Date(2023, 11, 1), amt: Math.random() * 1000 },
          { date: new Date(2024, 0, 1), amt: Math.random() * 1000 },
          { date: new Date(2024, 1, 1), amt: Math.random() * 1000 }
        ],
        transactions: []
      },
      {
        name: "Automotive",
        color: '#7BD3EA',
        spending: [
          { date: new Date(2023, 9, 1), amt: Math.random() * 1000 },
          { date: new Date(2023, 10, 1), amt: Math.random() * 1000 },
          { date: new Date(2023, 11, 1), amt: Math.random() * 1000 },
          { date: new Date(2024, 0, 1), amt: Math.random() * 1000 },
          { date: new Date(2024, 1, 1), amt: Math.random() * 1000 }
        ],
        transactions: []
      },
      {
        name: "Groceries",
        color: '#FDFFAE',
        spending: [
          { date: new Date(2023, 9, 1), amt: Math.random() * 1000 },
          { date: new Date(2023, 10, 1), amt: Math.random() * 1000 },
          { date: new Date(2023, 11, 1), amt: Math.random() * 1000 },
          { date: new Date(2024, 0, 1), amt: Math.random() * 1000 },
          { date: new Date(2024, 1, 1), amt: Math.random() * 1000 }
        ],
        transactions: []
      }
    ]);
  }
}

export class Category {
  name: string = "";
  color: string = "";
  transactions: Transaction[] = [];
  spending: Spending[] = [];
}

export class Spending {
  date: Date = new Date();
  amt: number = 0;
}