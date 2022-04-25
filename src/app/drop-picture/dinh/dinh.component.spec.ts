import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinhComponent } from './dinh.component';

describe('DinhComponent', () => {
  let component: DinhComponent;
  let fixture: ComponentFixture<DinhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
