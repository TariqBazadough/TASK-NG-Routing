import { Component, EventEmitter } from '@angular/core';
import { DifficultyLevel, Trip, trips } from '../../../data/trips';
import { SearchFilterComponent } from '../../components/search-filter/search-filter.component';
import { DividerComponent } from '../../components/divider/divider.component';
import { TripsGridComponent } from '../../components/trips-grid/trips-grid.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trips-list',
  standalone: true,
  imports: [SearchFilterComponent,DividerComponent,TripsGridComponent],
  templateUrl: './trips-list.component.html',
  styleUrl: './trips-list.component.css'
})
export class TripsListComponent {

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      const difficulty = params['difficulty'] as DifficultyLevel;
      const search = params['search'] as string;
        this.activeDifficultyFilter = difficulty;
        this.searchQuery = search
        this.applyFilters();

    });
  }


  selectedTrip: Trip = trips[0];
  trips: Trip[] = trips;
  filteredTrips: Trip[] = [...trips];
  searchQuery: string = '';
  activeDifficultyFilter: DifficultyLevel = 'All';


  handleSearch(searchTerm: string) {
    this.searchQuery = searchTerm.toLowerCase();
    this.applyFilters();
  }

  handleFilter(difficulty: DifficultyLevel) {
    this.activeDifficultyFilter = difficulty;
    
    this.router.navigate([], {
      queryParams: { difficulty: difficulty !== 'All' ? difficulty : null ,
        search: this.searchQuery
      },
      queryParamsHandling: 'merge',
    });

    this.applyFilters();
  }

  private applyFilters() {
    this.filteredTrips = this.trips.filter((trip) => {
      
      const matchesSearch =
        !this.searchQuery ||
        trip.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        trip.city.toLowerCase().includes(this.searchQuery.toLowerCase()) 

      const matchesDifficulty =
      this.activeDifficultyFilter === 'All' ||
      this.activeDifficultyFilter === undefined ||
      trip.difficulty === this.activeDifficultyFilter;

      return matchesSearch && matchesDifficulty;
    });
  }

}
