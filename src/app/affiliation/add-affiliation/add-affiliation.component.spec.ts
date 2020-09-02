import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAffiliationComponent } from './add-affiliation.component';

describe('AddAffiliationComponent', () => {
  let component: AddAffiliationComponent;
  let fixture: ComponentFixture<AddAffiliationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAffiliationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAffiliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
