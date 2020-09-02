import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlacementAttachmentComponent } from './view-placement-attachment.component';

describe('ViewPlacementAttachmentComponent', () => {
  let component: ViewPlacementAttachmentComponent;
  let fixture: ComponentFixture<ViewPlacementAttachmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPlacementAttachmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPlacementAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
