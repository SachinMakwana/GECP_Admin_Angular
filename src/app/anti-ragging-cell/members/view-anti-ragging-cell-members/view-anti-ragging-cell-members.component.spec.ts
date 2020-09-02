import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAntiRaggingCellMembersComponent } from './view-anti-ragging-cell-members.component';

describe('ViewAntiRaggingCellMembersComponent', () => {
  let component: ViewAntiRaggingCellMembersComponent;
  let fixture: ComponentFixture<ViewAntiRaggingCellMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAntiRaggingCellMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAntiRaggingCellMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
