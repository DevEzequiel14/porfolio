import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-jasmine',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 255" [attr.width]="size.width" [attr.height]="size.height">
  <g fill="#8A4182">
    <path d="M118 105h20l5-6V46h-30v53l5 6M106 129l6-19-5-7-51-16-9 28 51 16 8-2M124 148l-16-11-8 2-31 43 24 17 31-42v-9M148 137l-16 11v9l31 42 24-17-31-43-8-2M145 110l6 19 8 2 50-16-9-28-50 16-5 7"/>
    <path d="M128 0C58 0 0 57 0 127a128 128 0 0 0 256 0C256 57 199 0 128 0Zm0 26c56 0 102 45 102 101s-46 102-102 102S26 183 26 127 72 26 128 26Z"/>
    <path d="m206 155-39-12 3-8 38 13-2 7M157 94l-7-5 24-32 6 5-23 32M100 94 76 61l7-4 24 32-7 5M51 155l-3-8 38-12 3 8-38 12M124 208h8v-40h-8v40Z"/>
  </g>
</svg>
  `,
})
export class SvgJasmineComponent {
  @Input({ required: true }) size!: { width: number; height: number };
}
