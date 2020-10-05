import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAntiRaggingCellAttachmentsComponent } from './add-anti-ragging-cell-attachments.component';

describe('AddAntiRaggingCellAttachmentsComponent', () => {
  let component: AddAntiRaggingCellAttachmentsComponent;
  let fixture: ComponentFixture<AddAntiRaggingCellAttachmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAntiRaggingCellAttachmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAntiRaggingCellAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
