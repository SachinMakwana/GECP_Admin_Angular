import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlacementMemberComponent } from './view-placement-member.component';

describe('ViewPlacementMemberComponent', () => {
  let component: ViewPlacementMemberComponent;
  let fixture: ComponentFixture<ViewPlacementMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPlacementMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPlacementMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
