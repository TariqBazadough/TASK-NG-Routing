import { Component, Input } from '@angular/core';
import { Trip, trips } from '../../../data/trips';
import { TripCardComponent } from '../trip-card/trip-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-trips-grid',
  standalone: true,
  imports: [TripCardComponent, RouterLink],
  templateUrl: './trips-grid.component.html',
  styleUrl: './trips-grid.component.css',
})
export class TripsGridComponent {
  @Input() trips: Trip[] = [];
}
