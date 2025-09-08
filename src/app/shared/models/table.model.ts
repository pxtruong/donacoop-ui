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
  pageSizeOptions?: number[];
  pageSize?: number;
  length?: number;
  isLoading?: boolean;
}
