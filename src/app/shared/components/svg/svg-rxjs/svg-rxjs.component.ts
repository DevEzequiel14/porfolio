import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-rxjs',
  standalone: true,
  template: `
  <img src="../../../../../assets/img/svg/rxjs.svg" alt="" width="{{ size.width }}" height="{{ size.height }}">
  `,
})
export class SvgRxjsComponent {
  @Input({ required: true }) size!: { width: number; height: number };
}
