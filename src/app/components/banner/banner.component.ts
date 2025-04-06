import { Component, Input } from '@angular/core';
import { DividerComponent } from '../divider/divider.component';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
}
