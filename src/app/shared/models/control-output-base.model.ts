import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-control-out-base',
  standalone: true,
  template: '',
})
export class ControlOutputBase {
  @Output() triggerSearch = new EventEmitter<void>();
}
