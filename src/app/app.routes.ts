import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../app/layout/main/main.component').then(m => m.MainComponent)
  }
];
