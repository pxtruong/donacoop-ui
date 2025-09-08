import { Routes } from '@angular/router';
import { ROUTE_CONSTANTS } from '../../shared/constants/route.constant';
import { RegistrationsResolver } from '../registrations/resolvers/registrations.resolver';

export const ActivitiesRoutes: Routes = [
  {
    path: ROUTE_CONSTANTS.PAGE.THEO_DOI_HOAT_DONG.PATH,
    loadComponent: () =>
      import(
        './components/theo-doi-hoat-dong.component/activities.component'
      ).then((m) => m.TheoDoiHoatDongComponent),
    resolve: [RegistrationsResolver],
  },
];
