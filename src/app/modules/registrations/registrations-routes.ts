import { Routes } from '@angular/router';
import { ROUTE_CONSTANTS } from '../../shared/constants/route.constant';
import { MachineriesResolver } from '../master-data/resolvers/machineries.resolver';
import { StoneTypeResolver } from '../master-data/resolvers/stone-type.resolver';
import { TruckResolver } from '../master-data/resolvers/trucks.resolver';
import { WarehousesResolver } from '../master-data/resolvers/warehouses.resolver';
import { CompanyResolver } from '../master-data/resolvers/company.resolver';

export const RegistrationsRoutes: Routes = [
  {
    path: ROUTE_CONSTANTS.QUARRY.REGISTRATION_AND_ACTIVITIES.CHILDREN
      .DS_XE_TAI_DANG_KY.PATH,
    loadComponent: () =>
      import(
        './components/registrations.component/registrations.component'
      ).then((m) => m.RegistrationsComponent),
    resolve: [
      TruckResolver,
      WarehousesResolver,
      StoneTypeResolver,
      MachineriesResolver,
      CompanyResolver,
    ],
  },
];
