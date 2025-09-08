import { Component, Input } from '@angular/core';
import { IDynamicFormModel } from '../../models/dynamic-form.model';
import { SharedDynamicComponent } from '../shared-dynamic-component/shared-dynamic-component';

@Component({
  selector: 'shared-form',
  imports: [SharedDynamicComponent],
  templateUrl: './shared-form.html',
  styleUrl: './shared-form.scss',
  standalone: true,
})
export class SharedForm {
  @Input() iFormConfig: IDynamicFormModel[] = [];
}
