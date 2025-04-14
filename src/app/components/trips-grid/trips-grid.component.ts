import { Component, Input } from '@angular/core';
import { Trip } from '../../../data/trips';
import { TripCardComponent } from '../trip-card/trip-card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-trips-grid',
  standalone: true,
  imports: [TripCardComponent, RouterModule],
  templateUrl: './trips-grid.component.html',
  styleUrl: './trips-grid.component.css'
})
export class TripsGridComponent {
  @Input() trips: Trip[] = [];
}
