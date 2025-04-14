import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { SearchFilterComponent } from '../../components/search-filter/search-filter.component';
import { DividerComponent } from '../../components/divider/divider.component';
import { TripsGridComponent } from '../../components/trips-grid/trips-grid.component';
import { TripDetailsComponent } from '../../components/trip-details/trip-details.component';
import { DifficultyLevel, Trip, trips } from '../../../data/trips';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trips-list',
  standalone: true,
  imports: [
    BannerComponent,
    SearchFilterComponent,
    DividerComponent,
    TripsGridComponent,
    TripDetailsComponent,
    NavbarComponent,
  ],
  templateUrl: './trips-list.component.html',
  styleUrl: './trips-list.component.css',
})
export class TripsListComponent {
  trips: Trip[] = trips;
  filteredTrips: Trip[] = [...trips];
  selectedTrip: Trip = trips[0];
  searchQuery: string = '';
  activeDifficultyFilter: DifficultyLevel = 'All';

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      const difficulty = params['difficulty'] as DifficultyLevel;
      if (difficulty && ['Easy', 'Medium', 'Hard'].includes(difficulty)) {
        this.activeDifficultyFilter = difficulty;
        this.applyFilters();
      }
    });
  }

  handleSearch(searchTerm: string) {
    this.searchQuery = searchTerm.toLowerCase();
    this.applyFilters();
  }

  handleFilter(difficulty: DifficultyLevel) {
    this.activeDifficultyFilter = difficulty;

    this.router.navigate([], {
      queryParams: { difficulty: difficulty !== 'All' ? difficulty : null },
      queryParamsHandling: 'merge',
    });

    this.applyFilters();
  }

  private applyFilters() {
    this.filteredTrips = this.trips.filter((trip) => {
      const matchesSearch =
        !this.searchQuery ||
        trip.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        trip.city.toLowerCase().includes(this.searchQuery.toLowerCase());

      const matchesDifficulty =
        this.activeDifficultyFilter === 'All' ||
        trip.difficulty === this.activeDifficultyFilter;

      return matchesSearch && matchesDifficulty;
    });
  }
}
