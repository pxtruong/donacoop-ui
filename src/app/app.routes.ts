import { Routes } from '@angular/router';
import { CoreLayoutComponent } from './core/components/core-layout/core-layout';
import { CoreRoutes } from './core/core.routes';
import { KeHoachRoutes } from './modules/ke-hoach/ke-hoach.routes';
import { MasterDataRoutes } from './modules/master-data/master-data.routes';
import { RegistrationActivitiesRoutes } from './modules/registrations-and-activities/registrations-and-activities.routes';
import { SimulatorRoutes } from './modules/simulator/simulator.routes';

export const routes: Routes = [
  ...CoreRoutes,
  {
    path: 'page',
    component: CoreLayoutComponent,
    children: [
      ...MasterDataRoutes,
      ...KeHoachRoutes,
      ...RegistrationActivitiesRoutes,
      ...SimulatorRoutes,
    ],
  },
  { path: '', redirectTo: 'page/master-data', pathMatch: 'full' },
];
