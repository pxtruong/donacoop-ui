import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreSideNav } from './core-side-nav';

describe('CoreSideNav', () => {
  let component: CoreSideNav;
  let fixture: ComponentFixture<CoreSideNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreSideNav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreSideNav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
