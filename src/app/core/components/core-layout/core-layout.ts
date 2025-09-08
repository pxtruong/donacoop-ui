import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreHeader } from '../core-header/core-header';
import { CoreSideNav } from '../core-side-nav/core-side-nav';

@Component({
  selector: 'core-layout',
  templateUrl: './core-layout.html',
  styleUrl: './core-layout.scss',
  standalone: true,
  imports: [RouterOutlet, CoreHeader, CoreSideNav],
})
export class CoreLayoutComponent {}
