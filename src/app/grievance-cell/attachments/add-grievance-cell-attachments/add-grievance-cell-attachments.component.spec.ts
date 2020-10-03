import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGrievanceCellAttachmentsComponent } from './add-grievance-cell-attachments.component';

describe('AddGrievanceCellAttachmentsComponent', () => {
  let component: AddGrievanceCellAttachmentsComponent;
  let fixture: ComponentFixture<AddGrievanceCellAttachmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGrievanceCellAttachmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGrievanceCellAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
