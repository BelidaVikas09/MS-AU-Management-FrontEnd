import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McqListAllComponent } from './mcq-list-all.component';

describe('McqListAllComponent', () => {
  let component: McqListAllComponent;
  let fixture: ComponentFixture<McqListAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McqListAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McqListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
