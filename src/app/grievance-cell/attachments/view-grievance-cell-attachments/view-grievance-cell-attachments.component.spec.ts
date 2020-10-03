import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGrievanceCellAttachmentsComponent } from './view-grievance-cell-attachments.component';

describe('ViewGrievanceCellAttachmentsComponent', () => {
  let component: ViewGrievanceCellAttachmentsComponent;
  let fixture: ComponentFixture<ViewGrievanceCellAttachmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGrievanceCellAttachmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGrievanceCellAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
