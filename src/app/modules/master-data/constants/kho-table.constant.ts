import { StoreDataKeys } from '../../../core/models/store-data.model';
import { StoreDataService } from '../../../core/services/store-data.service';
import { SharedAction } from '../../../shared/components/shared-action/shared-action';
import { ITableConfig } from '../../../shared/models/table.model';
import { CustomBindingPipe } from '../../../shared/pipes/custom-binding.pipe';
import { FIELD_KHO_CONSTANT } from './field-kho.constant';

export function GET_TABLE_CONFIG_KHO(): ITableConfig {
  const customBindingCompany = new CustomBindingPipe();
  customBindingCompany.customFunction = (value: any, args: any) => {
    return args[1]?.company?.name;
  };
  const stoneList = StoreDataService.getValue(StoreDataKeys.STONE_TYPE);
  const columns: any[] = [
    {
      field: FIELD_KHO_CONSTANT.TEN_KHO,
      columnTitle: 'Tên Kho',
      sticky: true,
    },
  ];
  const displayedColumns: string[] = [FIELD_KHO_CONSTANT.TEN_KHO];
  // generate column stone
  if (Array.isArray(stoneList)) {
    stoneList.forEach((i) => {
      columns.push({
        field: i.value + '',
        columnTitle: i.label,
      });
      displayedColumns.push(i.value + '');
    });
  }

  columns.push(
    {
      field: FIELD_KHO_CONSTANT.COMPANY,
      columnTitle: 'Địa Chỉ',
      pipeValue: customBindingCompany,
    },
    {
      field: 'actioncolumn',
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
  displayedColumns.push(FIELD_KHO_CONSTANT.COMPANY, 'actioncolumn');
  return {
    columns: columns,
    dataSource: [{}],
    displayedColumns: displayedColumns,
    pageSizeOptions: [5, 10, 25, 100],
    pageSize: 10,
    length: 0,
    isLoading: false,
  };
}
