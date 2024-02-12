import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { CardComponent } from '../../components/card/card.component';
import { LineGraphComponent } from '../../components/line-graph/line-graph.component';
import { Category, SpendingApiService } from '../../providers/spending/spending-api.service'
import { Transaction, TransactionsApiService } from '../../providers/transactions/transactions-api.service';
import { ListComponent } from '../../components/list/list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NavBarComponent,
    CardComponent,
    LineGraphComponent,
    ListComponent,
  ],
  providers: [
    SpendingApiService,
    TransactionsApiService,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private readonly _spendingService: SpendingApiService,
    private readonly _transactionService: TransactionsApiService) { }

  spendingData: Category[] = [];
  transactions: Transaction[] = [];

  ngOnInit() {
    this._spendingService.getSpendingByCategory().
      subscribe(spending => this.spendingData = spending);
    this._transactionService.getTransactions().
      subscribe(transactions => this.transactions = transactions);
  }
}
