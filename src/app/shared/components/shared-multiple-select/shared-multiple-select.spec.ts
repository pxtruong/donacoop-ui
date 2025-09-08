import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedMultipleSelect } from './shared-multiple-select';

describe('SharedMultipleSelect', () => {
  let component: SharedMultipleSelect;
  let fixture: ComponentFixture<SharedMultipleSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedMultipleSelect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedMultipleSelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
