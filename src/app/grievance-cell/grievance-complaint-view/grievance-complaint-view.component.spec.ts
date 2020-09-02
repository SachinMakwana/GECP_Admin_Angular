import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrievanceComplaintViewComponent } from './grievance-complaint-view.component';

describe('GrievanceComplaintViewComponent', () => {
  let component: GrievanceComplaintViewComponent;
  let fixture: ComponentFixture<GrievanceComplaintViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrievanceComplaintViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrievanceComplaintViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
