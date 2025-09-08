import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedDatePicker } from './shared-date-picker';

describe('SharedDatePicker', () => {
  let component: SharedDatePicker;
  let fixture: ComponentFixture<SharedDatePicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedDatePicker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedDatePicker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
