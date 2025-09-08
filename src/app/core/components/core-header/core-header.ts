import { Component } from '@angular/core';
import { BasicExtends } from '../../../shared/models/basic-extends.model';
import { MaterialModule } from '../../../shared/modules/material/material-module';

@Component({
  selector: 'core-header',
  imports: [MaterialModule],
  templateUrl: './core-header.html',
  styleUrl: './core-header.scss',
})
export class CoreHeader extends BasicExtends {
  get isShowHeader() {
    return true;
  }

  logout() {
    // TODO logout
  }
}
