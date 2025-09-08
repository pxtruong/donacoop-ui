import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlBase } from '../../models/control-base.model';
import { MaterialModule } from '../../modules/material/material-module';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-input',
  templateUrl: './shared-input.html',
  styleUrls: ['./shared-input.scss'],
  standalone: true,
  imports: [MaterialModule, TranslatePipe, ReactiveFormsModule, CommonModule],
})
export class SharedInputComponent extends ControlBase {}
