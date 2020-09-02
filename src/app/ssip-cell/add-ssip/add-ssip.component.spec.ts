import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSsipComponent } from './add-ssip.component';

describe('AddSsipComponent', () => {
  let component: AddSsipComponent;
  let fixture: ComponentFixture<AddSsipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSsipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSsipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
