import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGallaryComponent } from './events-gallary.component';

describe('EventsGallaryComponent', () => {
  let component: EventsGallaryComponent;
  let fixture: ComponentFixture<EventsGallaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsGallaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
