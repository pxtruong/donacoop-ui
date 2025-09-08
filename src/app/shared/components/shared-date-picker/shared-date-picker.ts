import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/material/material-module';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlBase } from '../../models/control-base.model';
import { provideNativeDateAdapter } from '@angular/material/core';
export const CUSTOM_DATE_FORMATS = {
  parse: {
    dateInput: 'dd-MM-yyyy',
    timeInput: 'HH:mm',
  },
  display: {
    dateInput: 'dd-MM-yyyy',
    timeInput: 'HH:mm',
    timeOptionLabel: 'HH:mm',
    monthYearLabel: 'MMM yyyy',
    dateA11yLabel: 'dd-MM-yyyy HH:mm',
    monthYearA11yLabel: 'MMMM yyyy',
  },
};

@Component({
  selector: 'shared-date-picker',
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './shared-date-picker.html',
  styleUrl: './shared-date-picker.scss',
  standalone: true,
  providers: [provideNativeDateAdapter(CUSTOM_DATE_FORMATS)],
})
export class SharedDatePicker extends ControlBase {}
