import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [],
  templateUrl: './svg-icon.component.html',
  styleUrl: './svg-icon.component.scss'
})
export class SvgIconComponent {
  @Input({ required: true }) set svgContent(value: string) {
    this.safeSvgContent = this.sanitizer.bypassSecurityTrustHtml(value);
  }
  @Input() size?: { width: number; height: number };
  @Input() view?: string;

  safeSvgContent!: SafeHtml;

  constructor(private readonly sanitizer: DomSanitizer) { }
}
