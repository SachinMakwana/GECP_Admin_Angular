import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWomenCellAttachmentsComponent } from './add-women-cell-attachments.component';

describe('AddWomenCellAttachmentsComponent', () => {
  let component: AddWomenCellAttachmentsComponent;
  let fixture: ComponentFixture<AddWomenCellAttachmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWomenCellAttachmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWomenCellAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
