import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AboutComponent } from '../../pages/about/about.component';
import { ExperienceComponent } from '../../pages/experience/experience.component';
import { SkillsComponent } from '../../pages/skills/skills.component';
import { ProjectsComponent } from "../../pages/projects/projects.component";
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  @ViewChildren('section') sections!: QueryList<ElementRef>;

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
