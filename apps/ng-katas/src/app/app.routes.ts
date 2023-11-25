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
  },
  {
    path: 'kata-2',
    loadComponent: () => import('@ng-katas/katas/calc').then(m => m.CalcComponent),
  },
  {
    path: 'kata-3',
    loadComponent: () => import('@ng-katas/katas/quote').then(m => m.QuoteComponent),
  },
  {
    path: 'kata-4',
    loadComponent: () => import('@ng-katas/katas/images').then(m => m.ImagesComponent),
  }
];
