import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentSectionComponent } from './add-student-section.component';

describe('AddStudentSectionComponent', () => {
  let component: AddStudentSectionComponent;
  let fixture: ComponentFixture<AddStudentSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStudentSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
