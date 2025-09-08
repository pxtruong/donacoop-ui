import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedDynamicComponent } from './shared-dynamic-component';

describe('SharedDynamicComponent', () => {
  let component: SharedDynamicComponent;
  let fixture: ComponentFixture<SharedDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedDynamicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
