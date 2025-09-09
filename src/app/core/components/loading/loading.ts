import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'core-loading',
  templateUrl: './loading.html',
  styleUrls: ['./loading.scss'],
  standalone: true,
  imports: [MatProgressSpinnerModule],
})
export class Loading {}
