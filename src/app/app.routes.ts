import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'trips',
    loadComponent: () =>
      import('./pages/trips-list/trips-list.component').then(
        (m) => m.TripsListComponent
      ),
  },
  {
    path: 'trips/:slug',
    loadComponent: () =>
      import('./pages/trip/trip.component').then((m) => m.TripComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
