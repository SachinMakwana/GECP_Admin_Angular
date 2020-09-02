import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAntiRaggingCellMembersComponent } from './add-anti-ragging-cell-members.component';

describe('AddAntiRaggingCellMembersComponent', () => {
  let component: AddAntiRaggingCellMembersComponent;
  let fixture: ComponentFixture<AddAntiRaggingCellMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAntiRaggingCellMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAntiRaggingCellMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
