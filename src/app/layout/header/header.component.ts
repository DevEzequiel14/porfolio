import { Component } from '@angular/core';
import { ScrollService } from '../../core/services/scroll.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  selectedItem: string | null = null;

  navItems = [
    {
      title: "Experiencia",
      label: "experiencia",
      url: "experience",
    },
    {
      title: "Proyectos",
      label: "proyectos",
      url: "projects",
    },
    {
      title: "Habilidades",
      label: "proyectos",
      url: "skills",
    },
    {
      title: "Sobre mí",
      label: "sobre-mi",
      url: "about",
    },
    {
      title: "Contacto",
      label: "contacto",
      url: "mailto:ezequielchorolque14@gmail.com",
    },
  ]

  constructor(private readonly scrollService: ScrollService) { }

  ngOnInit(): void {
    this.scrollService.activeSection$.subscribe((sectionId) => {
      this.selectedItem = sectionId;
    });
  }

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollTo(sectionId);
  }
}
