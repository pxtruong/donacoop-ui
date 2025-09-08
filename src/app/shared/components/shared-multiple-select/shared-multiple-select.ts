import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlBase } from '../../models/control-base.model';
import { MaterialModule } from '../../modules/material/material-module';

@Component({
  selector: 'shared-multiple-select',
  imports: [MaterialModule, ReactiveFormsModule, CommonModule],
  templateUrl: './shared-multiple-select.html',
  styleUrl: './shared-multiple-select.scss',
  standalone: true,
})
export class SharedMultipleSelect extends ControlBase {
  @Input() applyFieldValue: string = '';
}
