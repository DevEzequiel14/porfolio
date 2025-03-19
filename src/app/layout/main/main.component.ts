import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AboutComponent } from '../../pages/about/about.component';
import { ExperienceComponent } from '../../pages/experience/experience.component';
import { SkillsComponent } from '../../pages/skills/skills.component';
import { ProjectsComponent } from "../../pages/projects/projects.component";
import { ScrollService } from '../../core/services/scroll.service';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { LinkButtonComponent } from '../../shared/components/link-button/link-button.component';
import { IntersectionObserverDirective } from '../../shared/directives/intersection-observer.directive';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    BadgeComponent,
    LinkButtonComponent,
    IntersectionObserverDirective
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  @ViewChildren('section') sections!: QueryList<ElementRef>;
  iconContact = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-message-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9h8" /><path d="M8 13h6" /><path d="M11.99 18.606l-3.99 2.394v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5" /><path d="M19 22v-6" /><path d="M22 19l-3 -3l-3 3" /></svg>`
  iconLinkedin = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg>`

  constructor(private readonly scrollService: ScrollService) { }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id');
            if (sectionId) {
              this.scrollService.setActiveSection(sectionId);
            }
          }
        });
      },
      { threshold: 0.6 }
    );
    this.sections.forEach((section) => {
      observer.observe(section.nativeElement);
    });
  }
}
