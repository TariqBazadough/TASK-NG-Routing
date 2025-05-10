import { Component, EventEmitter, Output } from '@angular/core';
import { DifficultyLevel } from '../../../data/trips';
import { ActivatedRoute, Router } from '@angular/router';

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

  difficultyLevels: DifficultyLevel[] = ['All','Easy', 'Moderate', 'Hard'];
  activeFilter: DifficultyLevel = 'All';
  searchString: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      const difficulty = params['difficulty'] as DifficultyLevel;
      const search = params['search'] as string;
      
      if (difficulty && ['Easy', 'Medium', 'Hard'].includes(difficulty)) {
        this.filterByDifficulty(difficulty);
      }

      if(search != '' && search != undefined)
      {
        this.searchString = search
        this.onSearch(search)
      }
    });
  }

  onSearch(srch: string){//event: Event) {
    // const inputElement = event.target as HTMLInputElement;
    this.searchChange.emit(srch);//inputElement.value);
  }

  filterByDifficulty(level: DifficultyLevel) {
    this.activeFilter = level;
    this.filterChange.emit(this.activeFilter);
  }
}
