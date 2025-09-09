import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimuatorComponent } from './simuator.component';

describe('SimuatorComponent', () => {
  let component: SimuatorComponent;
  let fixture: ComponentFixture<SimuatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimuatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimuatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
