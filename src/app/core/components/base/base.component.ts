import { Component, OnInit } from '@angular/core';
import { BasicExtends } from '../../../shared/models/basic-extends.model';
import { BTNType } from '../../enum/button-type';

@Component({
  selector: 'core-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
  standalone: false,
})
export class BaseComponent extends BasicExtends implements OnInit {
  res: any;
  protected _initConstructor() {}
  constructor() {
    super();
  }
  public get BTNType() {
    return BTNType;
  }

  ngOnInit(): void {
    this._loadData();
  }
  // virtual
  protected _loadData() {}
}
