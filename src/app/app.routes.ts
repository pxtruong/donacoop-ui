import { Routes } from '@angular/router';
import { CoreLayoutComponent } from './core/components/core-layout/core-layout';
import { CoreRoutes } from './core/core.routes';
import { MasterDataRoutes } from './modules/master-data/master-data.routes';
import { PlantRoutes } from './modules/plant/plant.routes';
import { RegistrationActivitiesRoutes } from './modules/registrations-and-activities/registrations-and-activities.routes';
import { SimulatorRoutes } from './modules/simulator/simulator.routes';
import { ROUTE_CONSTANTS } from './shared/constants/route.constant';

export const routes: Routes = [
  ...CoreRoutes,
  {
    path: ROUTE_CONSTANTS.QUARRY.PATH,
    component: CoreLayoutComponent,
    children: [
      ...MasterDataRoutes,
      ...PlantRoutes,
      ...RegistrationActivitiesRoutes,
      ...SimulatorRoutes,
    ],
  },
  {
    path: '',
    redirectTo: `${ROUTE_CONSTANTS.QUARRY.PATH}/master-data`,
    pathMatch: 'full',
  },
];
