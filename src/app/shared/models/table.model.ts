import { PipeTransform } from '@angular/core';

export interface ITableColumn {
  field: string;
  columnTitle: string;
  sticky?: boolean;
  stickyEnd?: boolean;
  showComponent?: any;
  params?: any;
  width?: string;
  className?: string;
  headerClassName?: string;
  cellClassName?: string;
  minWidth?: number;
  maxWidth?: number;
  actionList?: any[];
  pipeValue?: PipeTransform;
  remarkConfig?: IRemarkConfig;
}
export interface IRemarkConfig {
  className: string;
}
export interface ITableConfig {
  columns: ITableColumn[];
  dataSource: any[];
  displayedColumns: string[];
  paginationConfig?: IPagination;
  isLoading?: boolean;
}
export interface IPagination {
  pageSizeOptions: number[];
  pageSize: number;
  total: number;
  pageIndex: number;
}

export const PaginationDefault = {
  pageSizeOptions: [5, 10, 25, 100],
  pageSize: 10,
  total: 0,
  pageIndex: 0,
};
