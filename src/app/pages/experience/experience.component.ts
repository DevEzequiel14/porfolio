import { Component } from '@angular/core';
import { SvgIconComponent } from '../../shared/components/svg-icon/svg-icon.component';

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  link: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  iconExperience = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
  stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler
  icons-tabler-outline icon-tabler-briefcase"><path stroke="none"
  d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
  <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /><path d="M12 12l0 .01" />
  <path d="M3 13a20 20 0 0 0 18 0" /></svg>`

  experiences: Experience[] = [
    {
      company: "Ministerio de Educación de Jujuy",
      role: "Desarrollador Frontend",
      period: "03/2023 - 12/2024",
      description: [
        `Desarrollo de módulos y componentes reutilizables para el sistema de
        gestión institucional, utilizando Angular, Tailwind, y RxJS para la
        manejo de estados y peticiones.`,
        `Implemetacion de funcionalidades que interactúan con una arquitectura
        de microservicios, permitiendo la comunicación eficiente entre diferentes
        sistemas, asegurando un flujo de datos consistente y escabilidad del
        proyecto.`,
        `Gestión de versiones con Git y seguimiento de los proyectos en Azure DevOps,
        incluyendo la elaboración de historias de usuario, estimaciones de
        tiempo y desglose de tareas.`,
        `Colaboración activa con los líderes de proyecto en la definición y
        diseño de funcionalidades clave.`,
        `Mi contribución ha optimizado procesos internos y mejorado la
        productividad general del sistema.`,
      ],
      link: "https://nexo.jujuy.edu.ar/",
    },
    {
      company: "Seenka",
      role: "Desarrollador Frontend",
      period: "08/2022 - 03/2023",
      description: [
        `Mantenimiento y desarrollo de nuevas funcionalidades para la plataforma
        web en Angular, resolviendo tickets reportados por los clientes y
        configurando tecnologías como Freshdesk y Hubspot para el seguimiento de
        métricas y tickets.`,
        `Diseño e integracion de servicios en una arquitectura de microservicios,
        asegurando las funcionalidades de la plataforma.`,
        `Implemtación de mejoras significativas en la interfaz de usuario,
        incrementando la usabilidad y la experiencia del usuario final.`,
        `Uso de Gilab para el control de versiones y Notion para la planificación
        de tareas y gestión de tareas.`,
      ],
      link: "https://seenka.com/",
    },
    {
      company: "Welo TV",
      role: "Desarrollador Frontend",
      period: "10/2021 - 07/2022",
      description: [
        `Responsable del manteminiento de la plataforma web en Angular y
        Tailwind, asegurando la gestión de eventos con RxJS y el manejo de
        dependencias con NPM, bajo un enfoque basado en microservicios.`,
        `Gestion de versiones con GitLab y adminstración de tareas en Notion,
        contribuyendo al avance continuo del proyecto.`,
        `Preparacion y presentacion de demos para comunicar correcciones y
        avances a los stakeholders`,
      ],
      link: "https://welo.tv/",
    },
    {
      company: "Openix Srl",
      role: "Desarrollador Fullstack",
      period: "01/2020 - 09/2021",
      description: [
        `Desarrollo de aplicaciones full stack utilizando Angular, Bootstrap,
        Django REST Framework, MySQL y PostgreSQL.`,
        `Implementación de prácticas de desarrollo de software como control de
        versiones con GitLab, documentacion de APIs con Swagger, y gestión de
        proyectos en Jira.`,
        `Aplicacion de patrones de diseño basados en la arquitectura REST,
        garantizando escabilidad y eficiencia en las soluciones.`],
      link: "https://openix.tech/",
    },
  ]
}
