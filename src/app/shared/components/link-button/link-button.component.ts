import { Component, Input } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-link-button',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './link-button.component.html',
  styleUrl: './link-button.component.scss'
})
export class LinkButtonComponent {
  @Input() href!: string;
  @Input() text!: string;
  @Input() icon!: string;
}
