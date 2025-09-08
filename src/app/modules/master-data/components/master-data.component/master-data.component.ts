import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { BaseLayoutComponent } from '../../../../core/components/base-layout.component/base-layout.component';
import { ButtonAcceppt } from '../../../../shared/components/button-acceppt/button-acceppt';
import { SharedForm } from '../../../../shared/components/shared-form/shared-form';
import { SharedSelect } from '../../../../shared/components/shared-select/shared-select';
import { BasicExtends } from '../../../../shared/models/basic-extends.model';
import { IDynamicFormModel } from '../../../../shared/models/dynamic-form.model';
import { ISelectionOption } from '../../../../shared/models/selection-option.model';
import { CONG_TY_OPTIONS } from '../../constants/company-options.constant';

@Component({
  selector: 'master-data',
  imports: [BaseLayoutComponent, SharedForm, RouterOutlet],
  templateUrl: './master-data.component.html',
  styleUrl: './master-data.component.scss',
})
export class MasterDataComponent extends BasicExtends {
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
        const currentComponent: any = this.outlet.component;
        if (!currentComponent) {
          return;
        }
        currentComponent.addNewPopup();
      },
    },
  ];

  constructor(private _router: Router) {
    super();
    for (let index = 0; index < CONG_TY_OPTIONS.length; index++) {
      const item = CONG_TY_OPTIONS[index];
      if ((item.value as string).includes(this._router.url)) {
        this.masterDataFormGroup.controls.typeControl.setValue(item);
        break;
      }
    }
  }
}
