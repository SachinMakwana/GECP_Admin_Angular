import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNssComponent } from './add-nss.component';

describe('AddNssComponent', () => {
  let component: AddNssComponent;
  let fixture: ComponentFixture<AddNssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
