import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../spending/spending-api.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionsApiService {
  constructor(private httpClient: HttpClient) { }

  getTransactions(pageNumber: number = 1, pageSize: number = 30): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(`http://localhost:5146/api/transaction?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }
}

export class Transaction {
  date: Date = new Date();
  vendor: string = "";
  amount: number = 0;
  category: Category = new Category();
}