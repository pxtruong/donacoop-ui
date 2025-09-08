import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedBreadcrumb } from './shared-breadcrumb';

describe('SharedBreadcrumb', () => {
  let component: SharedBreadcrumb;
  let fixture: ComponentFixture<SharedBreadcrumb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedBreadcrumb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedBreadcrumb);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
