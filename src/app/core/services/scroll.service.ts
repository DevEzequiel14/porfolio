import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private readonly activeSection = new BehaviorSubject<string | null>(null);
  activeSection$ = this.activeSection.asObservable();

  constructor() { }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.setActiveSection(sectionId);
    }
  }

  setActiveSection(sectionId: string): void {
    this.activeSection.next(sectionId);
  }
}
