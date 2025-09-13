import { StoreDataKeys } from '../../../core/models/store-data.model';
import { StoreDataService } from '../../../core/services/store-data.service';
import { SharedAction } from '../../../shared/components/shared-action/shared-action';
import {
  ITableConfig,
  PaginationDefault,
} from '../../../shared/models/table.model';
import { CustomBindingPipe } from '../../../shared/pipes/custom-binding.pipe';
import { COMMON_FIELD } from '../../base/donacoop-base.component/constants/donacoop-base.constant';
import { WAREHOUSES_FIELD_CONSTANT } from './warehouses-field.constant';

export function GET_TABLE_CONFIG_KHO(): ITableConfig {
  const customBindingCompany = new CustomBindingPipe();
  customBindingCompany.customFunction = (value: any, args: any) => {
    return args[1]?.company?.name;
  };
  const stoneTypeList = StoreDataService.getValue(StoreDataKeys.STONE_TYPE);
  const columns: any[] = [
    {
      field: WAREHOUSES_FIELD_CONSTANT.TEN_KHO,
      columnTitle: 'Tên Kho',
      sticky: true,
    },
  ];
  const displayedColumns: string[] = [WAREHOUSES_FIELD_CONSTANT.TEN_KHO];
  // generate column stone
  if (Array.isArray(stoneTypeList)) {
    stoneTypeList.forEach((i) => {
      columns.push({
        field: i.id + '',
        columnTitle: i.name,
      });
      displayedColumns.push(i.id + '');
    });
  }

  columns.push(
    {
      field: WAREHOUSES_FIELD_CONSTANT.COMPANY,
      columnTitle: 'Địa Chỉ',
      pipeValue: customBindingCompany,
    },
    {
      field: COMMON_FIELD.ACTION,
      columnTitle: 'Action',
      stickyEnd: true,
      showComponent: SharedAction,
      params: {
        actionList: [
          {
            iIcon: 'edit',
            iCustomClass: 'border-none',
            iColorIcon: 'primary',
          },
          {
            iIcon: 'add_circle_outline',
            iCustomClass: 'border-none',
            iColorIcon: 'primary',
          },
          {
            iIcon: 'delete',
            iCustomClass: 'border-none',
            iColorIcon: 'warn',
          },
        ],
      },
    }
  );
  displayedColumns.push(WAREHOUSES_FIELD_CONSTANT.COMPANY, COMMON_FIELD.ACTION);
  return {
    columns: columns,
    dataSource: [{}],
    displayedColumns: displayedColumns,
    paginationConfig: { ...PaginationDefault },
    isLoading: false,
  };
}
