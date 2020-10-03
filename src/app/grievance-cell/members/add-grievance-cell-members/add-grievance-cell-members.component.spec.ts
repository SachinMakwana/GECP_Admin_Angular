import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGrievanceCellMembersComponent } from './add-grievance-cell-members.component';

describe('AddGrievanceCellMembersComponent', () => {
  let component: AddGrievanceCellMembersComponent;
  let fixture: ComponentFixture<AddGrievanceCellMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGrievanceCellMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGrievanceCellMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
