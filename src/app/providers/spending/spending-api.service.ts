import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpendingApiService {

  constructor() { }

  get spendingByCategory(): Category[] {
    return [
      {
        categoryName: "Entertainment",
        spending: [
          { date: new Date(2023, 9, 1), amt: Math.random() * 1000 },
          { date: new Date(2023, 10, 1), amt: Math.random() * 1000 },
          { date: new Date(2023, 11, 1), amt: Math.random() * 1000 },
          { date: new Date(2024, 0, 1), amt: Math.random() * 1000 },
          { date: new Date(2024, 1, 1), amt: Math.random() * 1000 }
        ]
      },
      {
        categoryName: "Dining",
        spending: [
          { date: new Date(2023, 9, 1), amt: Math.random() * 1000 },
          { date: new Date(2023, 10, 1), amt: Math.random() * 1000 },
          { date: new Date(2023, 11, 1), amt: Math.random() * 1000 },
          { date: new Date(2024, 0, 1), amt: Math.random() * 1000 },
          { date: new Date(2024, 1, 1), amt: Math.random() * 1000 }
        ]
      },
      {
        categoryName: "Automotive",
        spending: [
          { date: new Date(2023, 9, 1), amt: Math.random() * 1000 },
          { date: new Date(2023, 10, 1), amt: Math.random() * 1000 },
          { date: new Date(2023, 11, 1), amt: Math.random() * 1000 },
          { date: new Date(2024, 0, 1), amt: Math.random() * 1000 },
          { date: new Date(2024, 1, 1), amt: Math.random() * 1000 }
        ]
      },
      {
        categoryName: "Groceries",
        spending: [
          { date: new Date(2023, 9, 1), amt: Math.random() * 1000 },
          { date: new Date(2023, 10, 1), amt: Math.random() * 1000 },
          { date: new Date(2023, 11, 1), amt: Math.random() * 1000 },
          { date: new Date(2024, 0, 1), amt: Math.random() * 1000 },
          { date: new Date(2024, 1, 1), amt: Math.random() * 1000 }
        ]
      }
    ]
  }
}

export class Category {
  categoryName: string = "";
  spending: Spend[] = [];
}

export class Spend {
  date: Date = new Date();
  amt: number = 0;
}