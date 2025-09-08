import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonBase } from '../../models/button-basic.model';
import { MaterialModule } from '../../modules/material/material-module';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'btn-acceppt',
  templateUrl: './button-acceppt.html',
  styleUrl: './button-acceppt.scss',
  standalone: true,
  imports: [TranslatePipe, MaterialModule, CommonModule],
})
export class ButtonAcceppt extends ButtonBase {
  @Input() iControl: any;
}
