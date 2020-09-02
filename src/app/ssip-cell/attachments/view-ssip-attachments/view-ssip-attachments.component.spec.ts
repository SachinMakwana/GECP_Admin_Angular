import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSsipAttachmentsComponent } from './view-ssip-attachments.component';

describe('ViewSsipAttachmentsComponent', () => {
  let component: ViewSsipAttachmentsComponent;
  let fixture: ComponentFixture<ViewSsipAttachmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSsipAttachmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSsipAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
