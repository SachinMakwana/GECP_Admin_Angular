import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlacementAttachmentComponent } from './add-placement-attachment.component';

describe('AddPlacementAttachmentComponent', () => {
  let component: AddPlacementAttachmentComponent;
  let fixture: ComponentFixture<AddPlacementAttachmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlacementAttachmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlacementAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
