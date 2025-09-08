import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedForm } from './shared-form';

describe('SharedForm', () => {
  let component: SharedForm;
  let fixture: ComponentFixture<SharedForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
