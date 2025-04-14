import { Component } from '@angular/core';
import { Trip,trips } from '../../../data/trips';
import { TripDetailsComponent } from "../../components/trip-details/trip-details.component";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trip',
  standalone: true,
  imports: [TripDetailsComponent],
  templateUrl: './trip.component.html',
  styleUrl: './trip.component.css'
})
export class TripComponent {

  constructor(private route: ActivatedRoute, private router: Router) {  
    this.route.paramMap.subscribe(params=>{
      const slug = params.get('slug')
      if(slug){        
        let num:number = +slug
      
        if(Number.isInteger( num )){
          this.selectedTrip = trips[num-1]
        }
      }
    })
  }

  selectedTrip!: Trip;
  

}
