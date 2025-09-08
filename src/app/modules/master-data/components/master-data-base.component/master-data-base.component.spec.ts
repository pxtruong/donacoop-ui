import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataBaseComponent } from './master-data-base.component';

describe('MasterDataBaseComponent', () => {
  let component: MasterDataBaseComponent;
  let fixture: ComponentFixture<MasterDataBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterDataBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterDataBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
