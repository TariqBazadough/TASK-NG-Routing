import { Component, Input } from '@angular/core';
import { Trip } from '../../../data/trips';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [],
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css',
})
export class TripCardComponent {
  @Input() trip!: Trip;

  constructor(private router: Router) {}

  navigateToTrip(slug: string) {
    this.router.navigate(['/trips', slug]);
  }
}
