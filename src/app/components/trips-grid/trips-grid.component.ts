import { Component, EventEmitter, Input } from '@angular/core';
import { Trip } from '../../../data/trips';
import { TripCardComponent } from '../trip-card/trip-card.component';

@Component({
  selector: 'app-trips-grid',
  standalone: true,
  imports: [TripCardComponent],
  templateUrl: './trips-grid.component.html',
  styleUrl: './trips-grid.component.css'
})
export class TripsGridComponent {
  @Input() trips: Trip[] = [];
}
