import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAchievementsComponent } from './add-achievements.component';

describe('AddAchievementsComponent', () => {
  let component: AddAchievementsComponent;
  let fixture: ComponentFixture<AddAchievementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAchievementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
