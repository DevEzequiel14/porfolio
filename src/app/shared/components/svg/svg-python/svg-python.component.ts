import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-python',
  standalone: true,
  template: `
    <img src="../../../../../assets/img/svg/python.svg" alt="" width="{{ size.width }}" height="{{ size.height }}">
  `,
})
export class SvgPythonComponent {
  @Input({ required: true }) size!: { width: number; height: number };
}
