import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesApiService {

  constructor(private httpClient: HttpClient) { }

  getCategoriesSpending(): Observable<Category[]> {
    return this.httpClient.get<Category[]>('http://localhost:5146/api/category/spending');
  }
}

export class Category {
  id: number = 0;
  name: string = '';
  color: string = '';
  spending: Spending[] = [];
}

export class Spending {
  month: Date = new Date();
  total: number = 0;
}