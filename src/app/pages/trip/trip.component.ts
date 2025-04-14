import { Component, Input } from '@angular/core';
import { Trip, trips } from '../../../data/trips';
import { TripDetailsComponent } from '../../components/trip-details/trip-details.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-trip',
  standalone: true,
  imports: [TripDetailsComponent, RouterModule],
  templateUrl: './trip.component.html',
  styleUrl: './trip.component.css',
})
export class TripComponent {
  // selectedTrip: Trip = trips[0];
  selectedTrip?: Trip;

  constructor(private route: ActivatedRoute, private router: Router) {
    const id = +this.route.snapshot.paramMap.get('slug')!;
    this.selectedTrip = trips.find((trip) => trip.id === id); // Find the fruit by ID
    // console.log('PLEASE WORK!!!');
    // console.log(this.selectedTrip);

    if (!this.selectedTrip) {
      // this.router.navigate(['/trips-list']);
      this.router.navigate(['/trips-list']);
      console.log('trip selected: ', this.selectedTrip);
    }
  }
}
