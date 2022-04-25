import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropPictureComponent } from './drop-picture.component';

describe('DropPictureComponent', () => {
  let component: DropPictureComponent;
  let fixture: ComponentFixture<DropPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
