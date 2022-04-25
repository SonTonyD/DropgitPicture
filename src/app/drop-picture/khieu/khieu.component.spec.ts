import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhieuComponent } from './khieu.component';

describe('KhieuComponent', () => {
  let component: KhieuComponent;
  let fixture: ComponentFixture<KhieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhieuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KhieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
