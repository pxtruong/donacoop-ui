import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCancel } from './button-cancel';

describe('ButtonCancel', () => {
  let component: ButtonCancel;
  let fixture: ComponentFixture<ButtonCancel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonCancel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonCancel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
