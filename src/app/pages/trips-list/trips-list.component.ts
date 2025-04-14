import { Component } from '@angular/core';
import { Trip, trips, DifficultyLevel } from '../../../data/trips';
import { SearchFilterComponent } from "../../components/search-filter/search-filter.component";
import { DividerComponent } from "../../components/divider/divider.component";
import { TripsGridComponent } from "../../components/trips-grid/trips-grid.component";

@Component({
  selector: 'app-trips-list',
  standalone: true,
  imports: [SearchFilterComponent, DividerComponent, TripsGridComponent],
  templateUrl: './trips-list.component.html',
  styleUrl: './trips-list.component.css'
})
export class TripsListComponent {
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
