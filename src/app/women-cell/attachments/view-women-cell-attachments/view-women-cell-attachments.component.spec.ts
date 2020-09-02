import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWomenCellAttachmentsComponent } from './view-women-cell-attachments.component';

describe('ViewWomenCellAttachmentsComponent', () => {
  let component: ViewWomenCellAttachmentsComponent;
  let fixture: ComponentFixture<ViewWomenCellAttachmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWomenCellAttachmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWomenCellAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
