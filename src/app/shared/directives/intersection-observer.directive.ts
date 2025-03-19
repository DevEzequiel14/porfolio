import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appIntersectionObserver]'
})
export class IntersectionObserverDirective implements AfterViewInit {

  constructor(private readonly el: ElementRef, private readonly render: Renderer2) { }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.render.addClass(this.el.nativeElement, 'opacity-100');
          this.render.addClass(this.el.nativeElement, 'translate-y-0');
          this.render.removeClass(this.el.nativeElement, 'opacity-0');
          this.render.removeClass(this.el.nativeElement, 'translate-y-10');
        }
      });
    },
      { threshold: 0.2 }
    );
    observer.observe(this.el.nativeElement);
  }
}
