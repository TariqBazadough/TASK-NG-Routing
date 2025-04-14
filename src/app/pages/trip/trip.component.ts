import { Component } from '@angular/core';
import { Trip, trips } from '../../../data/trips';
import { ActivatedRoute, Router } from '@angular/router';
import { TripDetailsComponent } from '../../components/trip-details/trip-details.component';

@Component({
  selector: 'app-trip',
  standalone: true,
  imports: [TripDetailsComponent],
  templateUrl: './trip.component.html',
  styleUrl: './trip.component.css',
})
export class TripComponent {
  selectedTrip: Trip | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {
    const id = this.route.snapshot.paramMap.get('slug')!;
    this.selectedTrip = trips.find((trip) => trip.slug === id);
    if (!this.selectedTrip) {
      this.router.navigate(['/trips']);
    }
  }

  goBack() {
    this.router.navigate(['trips']);
  }
}
