import {
  AfterViewInit,
  ApplicationRef,
  Component,
  ComponentRef,
  createComponent,
  ElementRef,
  EventEmitter,
  Injector,
  Input,
  Output,
  Renderer2,
  Type,
  ViewChild,
} from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ControlOutputBase } from '../../models/control-output-base.model';
import { ITableColumn } from '../../models/table.model';

@Component({
  selector: 'shared-dynamic-component',
  imports: [MatProgressBarModule],
  templateUrl: './shared-dynamic-component.html',
  styleUrl: './shared-dynamic-component.scss',
  standalone: true,
})
export class SharedDynamicComponent
  extends ControlOutputBase
  implements AfterViewInit
{
  @Output() clickBTN = new EventEmitter<void>();
  loading: boolean = false;
  @Input() set isLoading(value: boolean) {
    this.loading = value;
    if (value) {
      this._destroyDynamicComponent();
    } else {
      this._createComponent();
    }
  }
  @Input() iComponent!: Type<any>;
  @Input() iParams!: any;
  @ViewChild('wrapperDynamic') wrapperDynamic: any;
  // support shared table binding data into component
  @Input() iElement: any;
  @Input() iColumn!: ITableColumn;

  private _componentRef!: ComponentRef<any> | null;
  constructor(
    protected appRef: ApplicationRef,
    protected injector: Injector,
    private _renderer: Renderer2,
    private _element: ElementRef
  ) {
    super();
  }

  ngAfterViewInit(): void {
    this._createComponent();
  }

  private _createComponent() {
    if (this._componentRef || !this.iComponent || !this.wrapperDynamic) {
      return;
    }
    // Create the component reference
    this._componentRef = createComponent(this.iComponent, {
      environmentInjector: this.appRef.injector, // Use the application's injector
    });
    // TODO binding input
    if (this.iParams) {
      for (let field in this.iParams) {
        if (!this.iParams[field]) {
          continue;
        }
        this._componentRef.setInput(field, this.iParams[field]);
      }
    }
    // support table
    if (this.iElement) {
      this._componentRef.setInput('iElement', this.iElement);
    }
    if (this.iColumn) {
      this._componentRef.setInput('iColumn', this.iColumn);
    }
    this._getOutput();

    // Attach the component to the application's view hierarchy for change detection
    this.appRef.attachView(this._componentRef.hostView);

    // Append the component's root DOM element to the document body
    this._renderer.appendChild(
      this.wrapperDynamic.nativeElement,
      this._componentRef.location.nativeElement
    );
  }

  private _getOutput() {
    if (!this._componentRef) {
      return;
    }
    let configComponent: any = {
      _ActionComponentComponent: ['clickBTN'],
      _SharedSelect: ['triggerSearch'],
      _ButtonAcceppt: ['clickBTN'],
      _SharedAction: ['clickBTN'],
    };
    const listAction = configComponent[this.iComponent.name];
    console.log(`this.iComponent.name--`, this.iComponent.name);
    if (!Array.isArray(listAction)) {
      return;
    }
    const instance = this._componentRef.instance;
    if (!instance) {
      return;
    }
    listAction.forEach((action) => {
      if (!instance[action]) {
        return;
      }
      instance[action].subscribe((value: any) => {
        const that = this as any;
        if (!that[action]) {
          return;
        }
        that[action].emit(value);
      });
    });
  }
  private _destroyDynamicComponent() {
    if (!this._componentRef) {
      return;
    }
    this.appRef.detachView(this._componentRef.hostView); // Detach from change detection
    this._componentRef.destroy(); // Destroy the component instance
    this._componentRef = null;
  }
}
