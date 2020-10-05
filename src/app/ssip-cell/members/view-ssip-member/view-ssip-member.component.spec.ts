import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSsipMemberComponent } from './view-ssip-member.component';

describe('ViewSsipMemberComponent', () => {
  let component: ViewSsipMemberComponent;
  let fixture: ComponentFixture<ViewSsipMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSsipMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSsipMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
