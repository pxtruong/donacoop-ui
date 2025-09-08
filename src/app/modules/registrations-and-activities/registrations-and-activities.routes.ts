import { Routes } from '@angular/router';
import { ROUTE_CONSTANTS } from '../../shared/constants/route.constant';
import { ActivitiesRoutes } from '../theo-doi-hoat-dong/activities.routes';
import { RegistrationsRoutes } from '../registrations/registrations-routes';

export const RegistrationActivitiesRoutes: Routes = [
  {
    path: ROUTE_CONSTANTS.PAGE.REGISTRATION_AND_ACTIVITIES.PATH,
    loadComponent: () =>
      import('./components/registrations-and-activities').then(
        (m) => m.RegistrationsAndActivities
      ),
    children: [...ActivitiesRoutes, ...RegistrationsRoutes],
  },
];
