import { IPagination } from '../../../shared/models/table.model';

export interface IBasicModel {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface IRequestPaging {
  limit: string;
  page: string;
  [key: string]: string; // <-- thêm dòng này
}

export class CDanaCoopBase {
  static makeRequestPaging(data: IPagination): IRequestPaging {
    return {
      limit: data.pageSize + '',
      page: data.pageIndex + 1 + '',
    };
  }
}
