import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../spending/spending-api.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionsApiService {
  constructor() { }

  getTransactions(pageNumber: number = 1, pageSize: number = 10): Observable<Transaction[]> {
    var transactions: Transaction[] = [
      {
        vendor: "Taco Bell",
        amt: 24.99,
        category: {
          name: 'Dining',
          color: '#9DBC98',
          transactions: [],
          spending: [],
        }
      },
      {
        vendor: "Prattville Country Club",
        amt: 70.00,
        category: {
          name: 'Entertainment',
          color: '#BB6464',
          transactions: [],
          spending: [],
        }
      },
      {
        vendor: "Citgo",
        amt: 84.98,
        category: {
          name: 'Automotive',
          color: '#7BD3EA',
          transactions: [],
          spending: [],
        }
      },
      {
        vendor: "Beef O'Brady's",
        amt: 64.99,
        category: {
          name: 'Dining',
          color: '#9DBC98',
          transactions: [],
          spending: [],
        }
      },
      {
        vendor: "Walmart",
        amt: 245.88,
        category: {
          name: 'Groceries',
          color: '#FDFFAE',
          transactions: [],
          spending: [],
        }
      },
    ];

    return of(transactions);
  }
}

export class Transaction {
  vendor: string = "";
  amt: number = 0;
  category: Category = new Category();
}