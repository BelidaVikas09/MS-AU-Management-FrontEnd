import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizListAllComponent } from './quiz-list-all.component';

describe('QuizListAllComponent', () => {
  let component: QuizListAllComponent;
  let fixture: ComponentFixture<QuizListAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizListAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
