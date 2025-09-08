import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-remark',
  imports: [],
  templateUrl: './shared-remark.component.html',
  styleUrl: './shared-remark.component.scss',
  standalone: true,
})
export class SharedRemarkComponent {
  @Input() iRemarkConfig: any = {};
}
