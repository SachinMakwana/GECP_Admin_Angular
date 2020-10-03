import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGrievanceCellMembersComponent } from './view-grievance-cell-members.component';

describe('ViewGrievanceCellMembersComponent', () => {
  let component: ViewGrievanceCellMembersComponent;
  let fixture: ComponentFixture<ViewGrievanceCellMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGrievanceCellMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGrievanceCellMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
