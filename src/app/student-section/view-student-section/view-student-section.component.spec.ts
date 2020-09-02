import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentSectionComponent } from './view-student-section.component';

describe('ViewStudentSectionComponent', () => {
  let component: ViewStudentSectionComponent;
  let fixture: ComponentFixture<ViewStudentSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewStudentSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
