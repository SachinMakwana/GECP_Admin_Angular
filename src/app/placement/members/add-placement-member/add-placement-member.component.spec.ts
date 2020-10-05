import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlacementMemberComponent } from './add-placement-member.component';

describe('AddPlacementMemberComponent', () => {
  let component: AddPlacementMemberComponent;
  let fixture: ComponentFixture<AddPlacementMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlacementMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlacementMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
