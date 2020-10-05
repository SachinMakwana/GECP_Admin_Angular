import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSsipMemberComponent } from './add-ssip-member.component';

describe('AddSsipMemberComponent', () => {
  let component: AddSsipMemberComponent;
  let fixture: ComponentFixture<AddSsipMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSsipMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSsipMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
