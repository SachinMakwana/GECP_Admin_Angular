import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventsGallaryComponent } from './add-events-gallary.component';

describe('AddEventsGallaryComponent', () => {
  let component: AddEventsGallaryComponent;
  let fixture: ComponentFixture<AddEventsGallaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEventsGallaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventsGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
