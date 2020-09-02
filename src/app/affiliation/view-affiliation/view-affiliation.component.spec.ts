import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAffiliationComponent } from './view-affiliation.component';

describe('ViewAffiliationComponent', () => {
  let component: ViewAffiliationComponent;
  let fixture: ComponentFixture<ViewAffiliationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAffiliationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAffiliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
