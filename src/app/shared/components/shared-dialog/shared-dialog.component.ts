import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseComponent } from '../../../core/components/base/base.component';
import { CoreDialogComponent } from '../../../core/components/core-dialog/core-dialog.component';
import { SnackService } from '../../../core/services/snack.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ButtonAcceppt } from '../button-acceppt/button-acceppt';
import { ButtonCancel } from '../button-cancel/button-cancel';

@Component({
  selector: 'shared-dialog.component',
  imports: [TranslatePipe, CoreDialogComponent, ButtonCancel, ButtonAcceppt],
  templateUrl: './shared-dialog.component.html',
  styleUrl: './shared-dialog.component.scss',
  standalone: true,
})
export class SharedDialogComponent extends BaseComponent {
  public message: string = '';
  constructor(
    private _dialogRef: MatDialogRef<SharedDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    protected _snackService: SnackService
  ) {
    super();
    this.message = data.message;
  }

  public async confirmed() {
    if (this.data.confirmAction) {
      this.data.confirmAction();
    } else {
      this._dialogRef.close();
    }
  }

  public close() {
    this._dialogRef.close();
  }
}
