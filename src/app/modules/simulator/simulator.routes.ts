import { Routes } from '@angular/router';
import { ROUTE_CONSTANTS } from '../../shared/constants/route.constant';
import { StoneTypeResolver } from '../master-data/resolvers/stone-type.resolver';

export const SimulatorRoutes: Routes = [
  {
    path: ROUTE_CONSTANTS.PAGE.SIMULATOR.PATH,
    loadComponent: () =>
      import('./components/simuator.component/simuator.component').then(
        (m) => m.SimuatorComponent
      ),
    resolve: [StoneTypeResolver],
  },
];
