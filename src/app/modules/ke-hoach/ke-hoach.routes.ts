import { Routes } from '@angular/router';
import { ROUTE_CONSTANTS } from '../../shared/constants/route.constant';

export const KeHoachRoutes: Routes = [
  {
    path: ROUTE_CONSTANTS.PAGE.KE_HOACH.PATH,
    loadComponent: () =>
      import('./components/ke-hoach.component/ke-hoach.component').then(
        (m) => m.KeHoachComponent
      ),
  },
];
