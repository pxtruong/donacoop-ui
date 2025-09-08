import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonacoopBaseComponent } from './donacoop-base.component';

describe('DonacoopBaseComponent', () => {
  let component: DonacoopBaseComponent;
  let fixture: ComponentFixture<DonacoopBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonacoopBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonacoopBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
