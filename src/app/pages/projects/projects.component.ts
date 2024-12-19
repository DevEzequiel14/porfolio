import { LinkButtonComponent } from '../../shared/components/link-button/link-button.component';
import { SvgIconComponent } from '../../shared/components/svg-icon/svg-icon.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SvgIconComponent, LinkButtonComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  tags = {
    angular: {
      name: 'Angular',
      class: 'bg-[#430000] text-white',
      viewBox: '0 0 242 256',
      icon:
        `<g clip-path="url(#a)"><mask id="b" width="242" height="256" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" d="M0 0h242v256H0V0Z"/></mask><g mask="url(#b)"><path fill="url(#c)" d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"/ > <path fill="url(#d)" d = "m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z" /> </g></g > <defs><linearGradient id="c" x1 = "53.2" x2="245" y1="231.9" y2="140.7" gradientUnits="userSpaceOnUse" > <stop stop - color="#E40035"/><stop offset=".2" stop-color="#F60A48"/ > <stop offset=".4" stop - color="#F20755"/><stop offset=".5" stop-color="#DC087D"/ > <stop offset=".7" stop - color="#9717E7"/><stop offset="1" stop-color="#6C00F5"/ > </linearGradient> <linearGradient id="d" x1="44.5" x2="170" y1="30.7" y2="174" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF31D9"/ > <stop offset="1" stop - color="#FF5BE1" stop - opacity="0"/></linearGradient > <clipPath id="a"> <path fill="#fff" d = "M0 0h242v256H0z" /> </clipPath></defs >`
    },
    tailwind: {
      name: 'Tailwind',
      class: 'bg-[#003159] text-white',
      viewBox: '0 0 242 154',
      icon: `<defs><linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="gradient"><stop stop-color="#2298BD" offset="0%"></stop><stop stop-color="#0ED7B5" offset="100%"></stop></linearGradient></defs><path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z" fill="url(#gradient)"></path>`,
    },
    chartjs: {
      name: 'Chart.js',
      class: 'bg-[#7d6066] text-white',
      viewBox: '0 0 256 296',
      icon: `<path fill="#36A2EB" d="M248.572 148.807c-41.32.811-32.713 26.969-61.833 33.584-29.582 6.72-34.252-72.248-63.826-72.248-29.579 0-36.13 76.709-73.166 129.37l-1.057 1.491 79.404 45.836 120.478-69.551v-68.482Z"/><path fill="#FFCE56" d="M248.572 146.426c-13.832-17.752-23.214-38.16-43.4-38.16-35.72 0-26.32 58.271-65.798 58.271-39.482 0-43.633-62.679-88.358-3.759-14.252 18.774-25.723 39.707-34.734 59.515l111.812 64.549 120.478-69.551v-70.865Z"/><path fill="#FE6184" d="M7.613 170.564c13.555-37.538 19.405-67.94 45.283-67.94 39.478 0 48.875 110.908 82.718 99.625 33.838-11.278 30.077-71.432 82.719-71.432 10.02 0 20.25 6.138 30.241 16.067v70.405l-120.478 69.55L7.613 217.29v-46.725Z" opacity=".8"/><path fill="#E7E9ED" d="M128 295.56 0 221.673V73.89L128 0l128 73.89v147.78l-128 73.89ZM15.039 212.99 128 278.2l112.961-65.21V82.572L128 17.362 15.039 82.572V212.99Z"/>`
    },
  }

  iconProject = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-code"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg>`
  projects = [
    {
      title: 'ValorAr',
      description: 'Consulta los valores actualizados de dólares, inflación, plazos fijos y rendimientos en Argentina. Información gráfica y detallada para tomar decisiones financieras.',
      link: 'https://valorar.netlify.app/',
      github: 'https://github.com/DevEzequiel14/ValorAr',
      image: '../../../assets/img/projects/valorAr.webp',
      tags: [this.tags.angular, this.tags.chartjs]
    },
    {
      title: 'Plantilla Angular 17 Portfolio',
      description: 'Plantilla Angular 17 Portfolio: Diseño profesional con experiencia, acerca de mí, y más.',
      link: 'https://bejewelled-marzipan-abd81e.netlify.app/',
      github: 'https://github.com/DevEzequiel14/personalProject',
      image: '../../../assets/img/projects/plantilla.webp',
      tags: [this.tags.angular, this.tags.tailwind]
    }
  ];
}
