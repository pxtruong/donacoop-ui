import { Routes } from '@angular/router';
import { ROUTE_CONSTANTS } from '../../shared/constants/route.constant';
import { MachineriesResolver } from '../master-data/resolvers/machineries.resolver';
import { StoneTypeResolver } from '../master-data/resolvers/stone-type.resolver';
import { TruckResolver } from '../master-data/resolvers/trucks.resolver';
import { WarehousesResolver } from '../master-data/resolvers/warehouses.resolver';
import { CompanyResolver } from '../master-data/resolvers/company.resolver';

export const DSXeTaiRoutes: Routes = [
  {
    path: ROUTE_CONSTANTS.PAGE.DS_XE_TAI_DANG_KY.PATH,
    loadComponent: () =>
      import(
        './components/danh-sach-xe-tai-dang-ky.component/danh-sach-xe-tai-dang-ky.component'
      ).then((m) => m.DanhSachXeTaiDangKyComponent),
    resolve: [
      TruckResolver,
      WarehousesResolver,
      StoneTypeResolver,
      MachineriesResolver,
      CompanyResolver,
    ],
  },
];
