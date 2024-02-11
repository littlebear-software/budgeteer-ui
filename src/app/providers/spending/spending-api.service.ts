import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpendingApiService {

  constructor() { }

  getSpending(): Spend[] {
    return [
      { "month": "Oct", "amt": 100.00 },
      { "month": "Nov", "amt": 200.00 },
      { "month": "Dec", "amt": 300.00 },
      { "month": "Jan", "amt": 200.00 },
      { "month": "Feb", "amt": 100.00 }
    ]
  }
}

export class Spend {
  month: string = '';
  amt: number = 0;
}