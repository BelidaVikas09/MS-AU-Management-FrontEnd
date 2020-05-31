import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListAllComponent } from './project-list-all.component';

describe('ProjectListAllComponent', () => {
  let component: ProjectListAllComponent;
  let fixture: ComponentFixture<ProjectListAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectListAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
