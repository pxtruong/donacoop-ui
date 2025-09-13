import { Routes } from '@angular/router';
import { ROUTE_CONSTANTS } from '../../shared/constants/route.constant';
import { CompanyComponent } from './components/company.component/company.component';
import { MachineriesComponent } from './components/machineries.component/machineries.component';
import { PositionComponent } from './components/position.component/position.component';
import { StoneTypeComponent } from './components/stone-type.component/stone-type.component';
import { TruckComponent } from './components/truck.component/truck.component';
import { UserComponent } from './components/user.component/user.component';
import { WarehouseComponent } from './components/warehouse.component/warehouse.component';
import { CompanyResolver } from './resolvers/company.resolver';
import { RoleResolver } from './resolvers/role.resolver';
import { StoneTypeResolver } from './resolvers/stone-type.resolver';
import { UserResolver } from './resolvers/use.resolver';

export const MasterDataRoutes: Routes = [
  {
    path: ROUTE_CONSTANTS.QUARRY.MASTER_DATA.PATH,
    loadComponent: () =>
      import('./components/master-data.component/master-data.component').then(
        (m) => m.MasterDataComponent
      ),
    children: [
      {
        path: ROUTE_CONSTANTS.QUARRY.MASTER_DATA.CHILDREN.COMPANY.PATH,
        component: CompanyComponent,
      },
      {
        path: ROUTE_CONSTANTS.QUARRY.MASTER_DATA.CHILDREN.USER.PATH,
        component: UserComponent,
        resolve: [RoleResolver, CompanyResolver],
      },
      {
        path: ROUTE_CONSTANTS.QUARRY.MASTER_DATA.CHILDREN.TRUCKS.PATH,
        component: TruckComponent,
        resolve: [UserResolver, CompanyResolver],
      },
      {
        path: ROUTE_CONSTANTS.QUARRY.MASTER_DATA.CHILDREN.MACHINERIES.PATH,
        component: MachineriesComponent,
        resolve: [UserResolver],
      },
      {
        path: ROUTE_CONSTANTS.QUARRY.MASTER_DATA.CHILDREN.WAREHOUSES.PATH,
        component: WarehouseComponent,
        resolve: [StoneTypeResolver],
      },
      {
        path: ROUTE_CONSTANTS.QUARRY.MASTER_DATA.CHILDREN.STONE_TYPE.PATH,
        component: StoneTypeComponent,
      },
      {
        path: ROUTE_CONSTANTS.QUARRY.MASTER_DATA.CHILDREN.POSITION.PATH,
        component: PositionComponent,
      },
      {
        path: '',
        redirectTo: ROUTE_CONSTANTS.QUARRY.MASTER_DATA.CHILDREN.COMPANY.PATH,
        pathMatch: 'full',
      },
    ],
  },
];
