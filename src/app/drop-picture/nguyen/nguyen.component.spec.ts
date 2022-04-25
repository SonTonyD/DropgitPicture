import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NguyenComponent } from './nguyen.component';

describe('NguyenComponent', () => {
  let component: NguyenComponent;
  let fixture: ComponentFixture<NguyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NguyenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NguyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
