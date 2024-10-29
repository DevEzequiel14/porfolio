import { Component } from '@angular/core';
import { ScrollService } from '../../core/scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private readonly scrollService: ScrollService) { }

  scrollToSection(sectionId: string) {
    this.scrollService.scrollTo(sectionId);
  }
}
