import { Routes } from '@angular/router';
import { TripsListComponent } from './pages/trips-list/trips-list.component';
import { TripComponent } from './pages/trip/trip.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: 'trips', component: TripsListComponent },
  { path: 'trips/:slug', component: TripComponent },
  { path: '', component: HomeComponent },
  {
    path: '**',
    redirectTo: '',
  },
];
