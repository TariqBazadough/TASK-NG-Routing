import { Component, NgModule } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule , Router} from '@angular/router';
import { DifficultyLevel, Trip, trips } from '../../../data/trips';
import { TripDetailsComponent } from "../../components/trip-details/trip-details.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-trip',
  standalone: true,
  imports: [RouterModule, TripDetailsComponent, NgIf],
  templateUrl: './trip.component.html',
  styleUrl: './trip.component.css'
})
export class TripComponent {
  trip!: Trip | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {
    const slug = this.route.snapshot.paramMap.get('slug');
    const foundTrip = trips.find(t => t.slug === slug);

    if (foundTrip) {
      this.trip = foundTrip;
    } else {
      this.router.navigate(['/trips']);
    }
  }

}

