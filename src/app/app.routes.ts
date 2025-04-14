import { Routes } from '@angular/router';
import { TripsListComponent } from './pages/trips-list/trips-list.component';
import { TripComponent } from './pages/trip/trip.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'trips',
    component: TripsListComponent,
  },
  {
    path: 'trips/:slug',
    component: TripComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
