import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTotalMarksComponent } from './display-total-marks.component';

describe('DisplayTotalMarksComponent', () => {
  let component: DisplayTotalMarksComponent;
  let fixture: ComponentFixture<DisplayTotalMarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayTotalMarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTotalMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
