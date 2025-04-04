import { Routes } from '@angular/router';

export const routes: Routes = [

  { path: '', loadComponent: () => import('./HOME/home.component').then(m => m.HOMEComponent) },

];
