import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedTimePicker } from './shared-time-picker';

describe('SharedTimePicker', () => {
  let component: SharedTimePicker;
  let fixture: ComponentFixture<SharedTimePicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedTimePicker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedTimePicker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
