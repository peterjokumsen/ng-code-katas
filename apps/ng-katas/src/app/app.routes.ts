import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'kata-1',
  },
  {
    path: 'kata-1',
    loadComponent: () => import('@ng-katas/katas/counter').then(m => m.CounterComponent),
  }
];
