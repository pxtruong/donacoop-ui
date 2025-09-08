import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAcceppt } from './button-acceppt';

describe('ButtonAcceppt', () => {
  let component: ButtonAcceppt;
  let fixture: ComponentFixture<ButtonAcceppt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonAcceppt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonAcceppt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
