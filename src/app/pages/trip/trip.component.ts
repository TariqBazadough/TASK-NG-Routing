import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trip, trips } from '../../../data/trips';
import { TripDetailsComponent } from '../../components/trip-details/trip-details.component';

@Component({
  selector: 'app-trip',
  standalone: true,
  imports: [TripDetailsComponent],
  templateUrl: './trip.component.html',
  styleUrl: './trip.component.css',
})
export class TripComponent {
  trips = trips;
  trip: Trip | undefined = this.trips[0];
  constructor(private route: ActivatedRoute, private router: Router) {
    const slug: string = this.route.snapshot.paramMap.get('slug')!;
    console.log(slug);
    this.trip = this.trips.find((trip) => trip.slug === slug.toString()); // Find the fruit by ID
    if (!this.trip) {
      this.router.navigate(['/trips']);
    }
  }
}
