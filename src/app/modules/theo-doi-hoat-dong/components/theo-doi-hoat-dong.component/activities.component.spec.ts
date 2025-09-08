import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheoDoiHoatDongComponent } from './theo-doi-hoat-dong.component';

describe('TheoDoiHoatDongComponent', () => {
  let component: TheoDoiHoatDongComponent;
  let fixture: ComponentFixture<TheoDoiHoatDongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheoDoiHoatDongComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheoDoiHoatDongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
