import { Component } from '@angular/core';
import { Trip, trips } from '../../../data/trips';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TripDetailsComponent } from '../../components/trip-details/trip-details.component';

@Component({
  selector: 'app-trip',
  standalone: true,
  imports: [CommonModule, TripDetailsComponent],
  templateUrl: './trip.component.html',
  styleUrl: './trip.component.css',
})
export class TripComponent {
  trip!: Trip | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params) => {
      const slug = params['slug'];
      this.trip = trips.find((t) => t.slug === slug);

      if (!this.trip) {
        this.router.navigate(['/trips']);
      }
    });
  }
}
