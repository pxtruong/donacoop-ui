import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoneTypeComponent } from './stone-type.component';

describe('StoneTypeComponent', () => {
  let component: StoneTypeComponent;
  let fixture: ComponentFixture<StoneTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoneTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoneTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
