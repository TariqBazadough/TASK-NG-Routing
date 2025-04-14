import { Component, Input } from '@angular/core';
import { Trip } from '../../../data/trips';
import { DividerComponent } from '../divider/divider.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trip-details',
  standalone: true,
  imports: [DividerComponent, CommonModule],
  templateUrl: './trip-details.component.html',
  styleUrl: './trip-details.component.css',
})
export class TripDetailsComponent {
  @Input() trip!: Trip;
}
