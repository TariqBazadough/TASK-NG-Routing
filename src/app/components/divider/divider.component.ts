import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-divider',
  standalone: true,
  imports: [],
  templateUrl: './divider.component.html',
  styleUrl: './divider.component.css'
})
export class DividerComponent {
  @Input() color: string = '#2c3e50'; // Default color
}
