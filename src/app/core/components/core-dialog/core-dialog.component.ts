import { Component } from '@angular/core';
import { MatDialogContent } from '@angular/material/dialog';
import { MaterialModule } from '../../../shared/modules/material/material-module';

@Component({
  selector: 'core-dialog',
  imports: [MatDialogContent, MaterialModule],
  templateUrl: './core-dialog.component.html',
  styleUrl: './core-dialog.component.scss',
  standalone: true,
})
export class CoreDialogComponent {}
