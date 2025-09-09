import { Routes } from '@angular/router';
import { ROUTE_CONSTANTS } from '../../shared/constants/route.constant';
import { ActivitiesResolver } from '../theo-doi-hoat-dong/resolvers/activities.resolver';

export const KeHoachRoutes: Routes = [
  {
    path: ROUTE_CONSTANTS.PAGE.KE_HOACH.PATH,
    loadComponent: () =>
      import('./components/ke-hoach.component/ke-hoach.component').then(
        (m) => m.KeHoachComponent
      ),
    resolve: [ActivitiesResolver],
  },
];
