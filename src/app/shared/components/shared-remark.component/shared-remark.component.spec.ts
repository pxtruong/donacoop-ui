import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedRemarkComponent } from './shared-remark.component';

describe('SharedRemarkComponent', () => {
  let component: SharedRemarkComponent;
  let fixture: ComponentFixture<SharedRemarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedRemarkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedRemarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
