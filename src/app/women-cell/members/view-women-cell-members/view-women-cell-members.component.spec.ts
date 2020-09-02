import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWomenCellMembersComponent } from './view-women-cell-members.component';

describe('ViewWomenCellMembersComponent', () => {
  let component: ViewWomenCellMembersComponent;
  let fixture: ComponentFixture<ViewWomenCellMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWomenCellMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWomenCellMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
