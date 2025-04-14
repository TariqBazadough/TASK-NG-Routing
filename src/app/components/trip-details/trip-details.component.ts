import { Component, Input, Output } from '@angular/core';
import { Trip } from '../../../data/trips';
import { DividerComponent } from '../divider/divider.component';

@Component({
  selector: 'app-trip-details',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './trip-details.component.html',
  styleUrl: './trip-details.component.css',
})
export class TripDetailsComponent {
  @Input() trip!: Trip;
}
