import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { SearchFilterComponent } from '../../components/search-filter/search-filter.component';
import { DividerComponent } from '../../components/divider/divider.component';
import { TripsGridComponent } from '../../components/trips-grid/trips-grid.component';
import { TripDetailsComponent } from '../../components/trip-details/trip-details.component';
import { DifficultyLevel, Trip, trips } from '../../../data/trips';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    SearchFilterComponent,
    DividerComponent,
    TripsGridComponent,
    TripDetailsComponent,
    NavbarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  trips: Trip[] = trips;
  filteredTrips: Trip[] = [...trips];
  selectedTrip: Trip = trips[0];
  searchQuery: string = '';
  activeDifficultyFilter: DifficultyLevel = 'All';

  handleSearch(searchTerm: string) {
    this.searchQuery = searchTerm.toLowerCase();
    this.applyFilters();
  }

  handleFilter(difficulty: DifficultyLevel) {
    this.activeDifficultyFilter = difficulty;
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
        trip.difficulty === this.activeDifficultyFilter;

      return matchesSearch && matchesDifficulty;
    });
  }
}
