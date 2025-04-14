import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Trip,trips } from '../../../data/trips';
import { TripDetailsComponent } from '../../components/trip-details/trip-details.component';

@Component({
  selector: 'app-trip',
  standalone: true,
  imports: [
   
    RouterModule,
    TripDetailsComponent
 
  ],
  templateUrl: './trip.component.html',
  styleUrl: './trip.component.css'
})
export class TripComponent {

  trip: Trip | undefined;
  trips = trips;

  constructor(private route: ActivatedRoute, private router: Router)
  {
      const id = +this.route.snapshot.paramMap.get('slug')!;
      this.trip = this.trips.find((t)=>
        t.id === id      
      )

      if(!this.trip)
      {
        this.router.navigate(['/trips'])
      }
  }

  goBack()
  {
    this.router.navigate(['trips'])
  }

}
