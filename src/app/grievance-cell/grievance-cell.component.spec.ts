import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrievanceCellComponent } from './grievance-cell.component';

describe('GrievanceCellComponent', () => {
  let component: GrievanceCellComponent;
  let fixture: ComponentFixture<GrievanceCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrievanceCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrievanceCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
