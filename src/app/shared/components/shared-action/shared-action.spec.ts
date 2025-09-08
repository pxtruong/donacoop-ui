import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedAction } from './shared-action';

describe('SharedAction', () => {
  let component: SharedAction;
  let fixture: ComponentFixture<SharedAction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedAction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedAction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
