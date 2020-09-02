import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGrievanceCellComponent } from './add-grievance-cell.component';

describe('AddGrievanceCellComponent', () => {
  let component: AddGrievanceCellComponent;
  let fixture: ComponentFixture<AddGrievanceCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGrievanceCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGrievanceCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
