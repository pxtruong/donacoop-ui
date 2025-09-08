import {
  ApplicationRef,
  ComponentRef,
  createComponent,
  Injectable,
  Injector,
} from '@angular/core';
import { Snack } from '../components/snack/snack';
import { ISnackDetail } from '../models/snack.model';

@Injectable({ providedIn: 'root' })
export class SnackService {
  constructor(protected appRef: ApplicationRef, protected injector: Injector) {}

  showSnack(data: ISnackDetail) {
    // Create the component reference
    const componentRef = createComponent(Snack, {
      environmentInjector: this.appRef.injector, // Use the application's injector
    });
    componentRef.setInput('iMessage', data.message);
    componentRef.setInput('iComponentRef', componentRef);
    componentRef.setInput('iType', data.type);
    // Attach the component to the application's view hierarchy for change detection
    this.appRef.attachView(componentRef.hostView);

    // Append the component's root DOM element to the document body
    this._snackContainer.appendChild(componentRef.location.nativeElement);
    setTimeout(
      () => {
        this._destroyDynamicComponent(componentRef);
      },
      data.timeout ? data.timeout : 5000
    );
  }

  private get _snackContainer(): HTMLElement {
    return this._createSnackContainer();
  }

  private _createSnackContainer() {
    let snackContainer = document.getElementById('t-snack-container');
    if (snackContainer) {
      return snackContainer;
    }
    snackContainer = document.createElement('div');
    snackContainer.id = 't-snack-container';
    document.body.appendChild(snackContainer);
    return snackContainer;
  }

  private _destroyDynamicComponent(componentRef: ComponentRef<Snack>) {
    this.appRef.detachView(componentRef.hostView); // Detach from change detection
    componentRef.destroy(); // Destroy the component instance
  }

  public checkContainer() {
    const snackContainer = document.getElementById('t-snack-container');
    if (
      !snackContainer ||
      (snackContainer && snackContainer.childElementCount > 1)
    ) {
      return;
    }
    document.body.removeChild(snackContainer);
  }
}
