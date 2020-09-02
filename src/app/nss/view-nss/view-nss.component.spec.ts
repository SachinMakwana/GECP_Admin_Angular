import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNssComponent } from './view-nss.component';

describe('ViewNssComponent', () => {
  let component: ViewNssComponent;
  let fixture: ComponentFixture<ViewNssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
