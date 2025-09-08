import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonBase } from '../../models/button-basic.model';
import { MaterialModule } from '../../modules/material/material-module';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'btn-cancel',
  templateUrl: './button-cancel.html',
  styleUrl: './button-cancel.scss',
  standalone: true,
  imports: [TranslatePipe, MaterialModule, CommonModule],
})
export class ButtonCancel extends ButtonBase {}
