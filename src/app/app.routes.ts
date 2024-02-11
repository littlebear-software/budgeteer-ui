import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { BudgetComponent } from './pages/budget/budget.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'calendar', component: CalendarComponent },
    { path: 'budget', component: BudgetComponent },
    { path: 'transactions', component: TransactionsComponent },
    { path: 'settings', component: SettingsComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];
