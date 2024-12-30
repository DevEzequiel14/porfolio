import { SvgNpmComponent } from './../../shared/components/svg/svg-npm/svg-npm.component';
import { Component } from '@angular/core';
import { SvgIconComponent } from '../../shared/components/svg-icon/svg-icon.component';
import { SvgAngularComponent } from "../../shared/components/svg/svg-angular/svg-angular.component";
import { SvgTailwindComponent } from '../../shared/components/svg/svg-tailwind/svg-tailwind.component';
import { SvgBootstrapComponent } from '../../shared/components/svg/svg-bootstrap/svg-bootstrap.component';
import { SvgRxjsComponent } from '../../shared/components/svg/svg-rxjs/svg-rxjs.component';
import { SvgPythonComponent } from '../../shared/components/svg/svg-python/svg-python.component';
import { SvgDjangoComponent } from '../../shared/components/svg/svg-django/svg-django.component';
import { SvgDockerComponent } from '../../shared/components/svg/svg-docker/svg-docker.component';
import { SvgGitComponent } from '../../shared/components/svg/svg-git/svg-git.component';
import { SvgGitLabComponent } from '../../shared/components/svg/svg-git-lab/svg-git-lab.component';
import { SvgGithubComponent } from "../../shared/components/svg/svg-github/svg-github.component";
import { SvgTypeScriptComponent } from '../../shared/components/svg/svg-type-script/svg-type-script.component';
import { SvgJavaScriptComponent } from '../../shared/components/svg/svg-java-script/svg-java-script.component';
import { SvgJasmineComponent } from '../../shared/components/svg/svg-jasmine/svg-jasmine.component';
import { SvgNotionComponent } from '../../shared/components/svg/svg-notion/svg-notion.component';
import { SvgPostmanComponent } from '../../shared/components/svg/svg-postman/svg-postman.component';
import { SvgSwaggerComponent } from '../../shared/components/svg/svg-swagger/svg-swagger.component';
import { SvgSassComponent } from '../../shared/components/svg/svg-sass/svg-sass.component';
import { SvgMysqlComponent } from "../../shared/components/svg/svg-mysql/svg-mysql.component";
import { SvgPostgresqlComponent } from '../../shared/components/svg/svg-postgresql/svg-postgresql.component';
import { SvgMicrosoftsqlserverComponent } from '../../shared/components/svg/svg-microsoftsqlserver/svg-microsoftsqlserver.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    SvgIconComponent,
    SvgAngularComponent,
    SvgTailwindComponent,
    SvgBootstrapComponent,
    SvgRxjsComponent,
    SvgNpmComponent,
    SvgPythonComponent,
    SvgDjangoComponent,
    SvgDockerComponent,
    SvgGitComponent,
    SvgGitLabComponent,
    SvgGithubComponent,
    SvgTypeScriptComponent,
    SvgJavaScriptComponent,
    SvgJasmineComponent,
    SvgNotionComponent,
    SvgPostmanComponent,
    SvgSwaggerComponent,
    SvgSassComponent,
    SvgMysqlComponent,
    SvgPostgresqlComponent,
    SvgMicrosoftsqlserverComponent
],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  iconSkill = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
  stroke-linecap="round" stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-user-cog">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
  <path d="M6 21v-2a4 4 0 0 1 4 -4h2.5" />
  <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M19.001 15.5v1.5" /><path d="M19.001 21v1.5" />
  <path d="M22.032 17.25l-1.299 .75" /><path d="M17.27 20l-1.3 .75" />
  <path d="M15.97 17.25l1.3 .75" /><path d="M20.733 20l1.3 .75" /></svg>`
}
