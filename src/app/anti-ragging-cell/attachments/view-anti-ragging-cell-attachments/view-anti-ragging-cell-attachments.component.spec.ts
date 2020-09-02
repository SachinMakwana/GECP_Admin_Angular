import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAntiRaggingCellAttachmentsComponent } from './view-anti-ragging-cell-attachments.component';

describe('ViewAntiRaggingCellAttachmentsComponent', () => {
  let component: ViewAntiRaggingCellAttachmentsComponent;
  let fixture: ComponentFixture<ViewAntiRaggingCellAttachmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAntiRaggingCellAttachmentsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAntiRaggingCellAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); 
