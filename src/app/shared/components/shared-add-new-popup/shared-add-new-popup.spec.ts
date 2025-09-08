import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedAddNewPopup } from './shared-add-new-popup';

describe('SharedAddNewPopup', () => {
  let component: SharedAddNewPopup;
  let fixture: ComponentFixture<SharedAddNewPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedAddNewPopup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedAddNewPopup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
