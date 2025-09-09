import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { BaseLayoutComponent } from '../../../../core/components/base-layout.component/base-layout.component';
import { ButtonAcceppt } from '../../../../shared/components/button-acceppt/button-acceppt';
import { SharedForm } from '../../../../shared/components/shared-form/shared-form';
import { SharedSelect } from '../../../../shared/components/shared-select/shared-select';
import { IDynamicFormModel } from '../../../../shared/models/dynamic-form.model';
import { ISelectionOption } from '../../../../shared/models/selection-option.model';
import { DonacoopBaseComponent } from '../../../base/donacoop-base.component/donacoop-base.component';
import { CONG_TY_OPTIONS } from '../../constants/company-options.constant';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'master-data',
  imports: [BaseLayoutComponent, SharedForm, RouterOutlet],
  templateUrl: './master-data.component.html',
  styleUrl: './master-data.component.scss',
})
export class MasterDataComponent extends DonacoopBaseComponent {
  @ViewChild('outlet', { static: true }) outlet!: RouterOutlet;
  private masterDataFormGroup = new FormGroup({
    typeControl: new FormControl(CONG_TY_OPTIONS[0]),
  });
  public formConfig: IDynamicFormModel[] = [
    {
      fieldName: 'typeControl',
      iComponent: SharedSelect,
      label: 'Type',
      iParams: {
        iControl: this.masterDataFormGroup.get('typeControl'),
        dataSource: CONG_TY_OPTIONS,
      },
      className: 'col-12 col-md-6',
      onTriggerSearch: (data: ISelectionOption) => {
        this._router.navigate([data.value]);
      },
    },
    {
      fieldName: 'btnAccept',
      iComponent: ButtonAcceppt,
      label: '',
      iParams: {
        iControl: null,
        iIcon: '',
        iText: 'Thêm Mới',
        iCustomClass: 'mt-4',
      },
      className: 'col-12 col-md-6',
      clickBTN: () => {
        this.logLevel.debug('Click thêm mới in Master Data');
        console.log('Click thêm mới in Master Data', this.outlet);
        const currentComponent: any = this.outlet.component;
        if (!currentComponent) {
          return;
        }
        console.log('Click thêm mới in Master Data');
        currentComponent.addNewPopup();
      },
    },
  ];

  constructor(
    private _router: Router,
    protected override _dialog: MatDialog,
    protected override _builder: FormBuilder
  ) {
    super(_dialog, _builder);
    this.subcribe(
      this._router.events.pipe(
        filter((event) => event instanceof NavigationEnd)
      ),
      (event) => {
        this.logLevel.debug('URL changed to:', event.urlAfterRedirects);
        this._detectURL(event.urlAfterRedirects);
      }
    );
    this._detectURL(this._router.url);
  }

  private _detectURL(url: string) {
    for (let index = 0; index < CONG_TY_OPTIONS.length; index++) {
      const item = CONG_TY_OPTIONS[index];
      if ((item.value as string).includes(url)) {
        this.masterDataFormGroup.controls.typeControl.setValue(item);
        break;
      }
    }
  }
}
