import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BasicExtends } from '../../models/basic-extends.model';
import { ITableConfig } from '../../models/table.model';
import { PipeDynamicPipe } from '../../pipes/pipe-dynamic.pipe';
import { SharedDynamicComponent } from '../shared-dynamic-component/shared-dynamic-component';
import { SharedRemarkComponent } from '../shared-remark.component/shared-remark.component';

@Component({
  selector: 'shared-table',
  imports: [
    MatTableModule,
    SharedDynamicComponent,
    CommonModule,
    PipeDynamicPipe,
    SharedRemarkComponent,
    MatPaginatorModule,
  ],
  templateUrl: './shared-table.html',
  styleUrl: './shared-table.scss',
  standalone: true,
})
export class SharedTable extends BasicExtends {
  private _tableConfig!: ITableConfig;
  @Output() clickBTN = new EventEmitter();
  @Output() pagingChange = new EventEmitter();
  @Input() set iTableConfig(value: ITableConfig) {
    this._tableConfig = value;
  }
  get tableConfig(): ITableConfig {
    return this._tableConfig;
  }

  onClickBTN(event: any, element: any) {
    this.clickBTN.emit({ action: event, record: element });
  }

  pageChange(event: PageEvent) {
    this.pagingChange.emit(event);
  }
}
