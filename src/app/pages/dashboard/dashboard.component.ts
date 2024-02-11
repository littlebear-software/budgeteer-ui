import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { CardComponent } from '../../components/card/card.component';
import { SpendingGraphComponent } from '../../components/spending-graph/spending-graph.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NavBarComponent,
    CardComponent,
    SpendingGraphComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
