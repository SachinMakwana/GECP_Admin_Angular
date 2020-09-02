import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSsipAttachmentsComponent } from './add-ssip-attachments.component';

describe('AddSsipAttachmentsComponent', () => {
  let component: AddSsipAttachmentsComponent;
  let fixture: ComponentFixture<AddSsipAttachmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSsipAttachmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSsipAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
