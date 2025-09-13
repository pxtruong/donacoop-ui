import { Routes } from '@angular/router';
import { ROUTE_CONSTANTS } from '../../shared/constants/route.constant';
import { ActivitiesResolver } from '../theo-doi-hoat-dong/resolvers/activities.resolver';

export const PlantRoutes: Routes = [
  {
    path: ROUTE_CONSTANTS.QUARRY.KE_HOACH.PATH,
    loadComponent: () =>
      import('./components/plant.component/plant.component').then(
        (m) => m.PlantComponent
      ),
    resolve: [ActivitiesResolver],
  },
];
