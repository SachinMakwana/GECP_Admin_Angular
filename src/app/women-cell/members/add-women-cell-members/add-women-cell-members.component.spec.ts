import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWomenCellMembersComponent } from './add-women-cell-members.component';

describe('AddWomenCellMembersComponent', () => {
  let component: AddWomenCellMembersComponent;
  let fixture: ComponentFixture<AddWomenCellMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWomenCellMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWomenCellMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
