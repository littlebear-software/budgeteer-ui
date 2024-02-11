import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { CardComponent } from '../../components/card/card.component';
import { LineGraphComponent } from '../../components/line-graph/line-graph.component';
import { Category, SpendingApiService } from '../../providers/spending/spending-api.service'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NavBarComponent,
    CardComponent,
    LineGraphComponent
  ],
  providers: [
    SpendingApiService,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private readonly _spendingService: SpendingApiService) { }

  spendingData: Category[] = [];

  ngOnInit() {
    this.spendingData = this._spendingService.spendingByCategory;
  }
}
