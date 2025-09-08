import { Routes } from '@angular/router';
import { CoreLayoutComponent } from './core/components/core-layout/core-layout';
import { CoreRoutes } from './core/core.routes';
import { KeHoachRoutes } from './modules/ke-hoach/ke-hoach.routes';
import { MasterDataRoutes } from './modules/master-data/master-data.routes';
import { RegistrationsRoutes } from './modules/registrations/registrations-routes';
import { ActivitiesRoutes } from './modules/theo-doi-hoat-dong/activities.routes';

export const routes: Routes = [
  ...CoreRoutes,
  {
    path: 'page',
    component: CoreLayoutComponent,
    children: [
      ...MasterDataRoutes,
      ...RegistrationsRoutes,
      ...KeHoachRoutes,
      ...ActivitiesRoutes,
      { path: '', redirectTo: 'master-data', pathMatch: 'full' },
    ],
  },
];
