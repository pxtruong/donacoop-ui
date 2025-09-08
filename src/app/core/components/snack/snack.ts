import { CommonModule } from '@angular/common';
import {
  ApplicationRef,
  Component,
  ComponentRef,
  Injector,
  Input,
  OnDestroy,
} from '@angular/core';
import { SnackType } from '../../enum/snack-type';
import { SnackService } from '../../services/snack.service';
import { TranslatePipe } from "../../../shared/pipes/translate.pipe";

@Component({
  selector: 'app-snack',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './snack.html',
  styleUrl: './snack.scss',
})
export class Snack implements OnDestroy {
  private _iType: SnackType = SnackType.Success;
  @Input() set iType(value: SnackType) {
    this._iType = value;
  }

  @Input() iMessage: string = '';
  @Input() iComponentRef!: ComponentRef<Snack>;
  constructor(
    protected appRef: ApplicationRef,
    protected injector: Injector,
    protected _snackService: SnackService
  ) {}

  close() {
    if (!this.iComponentRef) {
      return;
    }
    (document?.activeElement as HTMLElement | null)?.blur();
    this.appRef.detachView(this.iComponentRef.hostView); // Detach from change detection
    this.iComponentRef.destroy(); // Destroy the component instance
  }

  ngOnDestroy(): void {
    this._snackService.checkContainer();
  }

  get snackBgColor() {
    if (this._iType === SnackType.Success) {
      return 'snack-bg-success';
    }
    if (this._iType === SnackType.Error) {
      return 'snack-bg-error';
    }
    return '';
  }
}
