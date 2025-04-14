import { Component, EventEmitter, Output } from '@angular/core';
import { DifficultyLevel } from '../../../data/trips';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [],
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.css',
})
export class SearchFilterComponent {
  @Output() searchChange = new EventEmitter<string>();
  @Output() filterChange = new EventEmitter<DifficultyLevel>();

  difficultyLevels: DifficultyLevel[] = ['All', 'Easy', 'Moderate', 'Hard'];
  activeFilter: DifficultyLevel = 'All';

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      const difficulty = params['difficulty'] as DifficultyLevel;
      if (difficulty && ['Easy', 'Moderate', 'Hard'].includes(difficulty)) {
        this.activeFilter = difficulty;
      }
    });
  }

  onSearch(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.searchChange.emit(inputElement.value);
  }

  filterByDifficulty(level: DifficultyLevel) {
    this.activeFilter = level;
    this.filterChange.emit(this.activeFilter);
  }
}
