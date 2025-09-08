import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ControlBase } from '../../models/control-base.model';
import { MaterialModule } from '../../modules/material/material-module';
import { debounceTime, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'shared-select',
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    CommonModule,
    NgxMatSelectSearchModule,
  ],
  templateUrl: './shared-select.html',
  styleUrl: './shared-select.scss',
  standalone: true,
})
export class SharedSelect extends ControlBase implements OnInit {
  public searchControl = new FormControl('');
  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();

  public renderDataSource: any[] = [];

  @Input() applyFieldValue: string = '';
  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(takeUntil(this._onDestroy), debounceTime(300))
      .subscribe(
        () => {
          this._filterData();
        },
        (error) => {
          this.logLevel.debug('filter error', error);
        }
      );
    this._resetDataSource();
  }

  private _resetDataSource() {
    this.renderDataSource = [...this.dataSource];
  }

  private _filterData() {
    let searchValue = this.searchControl.value;
    if (!searchValue) {
      this._resetDataSource();
      return;
    }
    searchValue = searchValue
      .replace(/\D/g, (value: string) => {
        return /[._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/.test(value)
          ? ''
          : value;
      })
      .toLowerCase();
    this.renderDataSource = this.dataSource.filter((i) => {
      return i.label.toLowerCase().search(searchValue) > -1;
    });
  }
  public selectionChange(data: any, event: any) {
    event.stopPropagation();
    this.triggerSearch.emit(data);
  }
}
