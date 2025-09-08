import { Routes } from '@angular/router';

export const CoreRoutes: Routes = [
  {
    path: 'page-not-found',
    loadComponent: () =>
      import('./components/page-not-found/page-not-found').then(
        (m) => m.PageNotFound
      ),
  },
  {
    path: 'access-denied',
    loadComponent: () =>
      import('./components/access-denied/access-denied').then(
        (m) => m.AccessDenied
      ),
  },
];
