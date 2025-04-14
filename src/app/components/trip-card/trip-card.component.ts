import { Component, Input } from '@angular/core';
import { Trip } from '../../../data/trips';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css',
})
export class TripCardComponent {
  @Input() trip!: Trip;
}
