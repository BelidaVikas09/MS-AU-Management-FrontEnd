import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentListAllComponent } from './assignment-list-all.component';

describe('AssignmentListAllComponent', () => {
  let component: AssignmentListAllComponent;
  let fixture: ComponentFixture<AssignmentListAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentListAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
