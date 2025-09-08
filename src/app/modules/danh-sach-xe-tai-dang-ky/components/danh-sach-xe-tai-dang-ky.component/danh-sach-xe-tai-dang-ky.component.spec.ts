import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachXeTaiDangKyComponent } from './danh-sach-xe-tai-dang-ky.component';

describe('DanhSachXeTaiDangKyComponent', () => {
  let component: DanhSachXeTaiDangKyComponent;
  let fixture: ComponentFixture<DanhSachXeTaiDangKyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DanhSachXeTaiDangKyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanhSachXeTaiDangKyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
