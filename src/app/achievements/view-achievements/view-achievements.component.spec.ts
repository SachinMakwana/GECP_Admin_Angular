import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAchievementsComponent } from './view-achievements.component';

describe('ViewAchievementsComponent', () => {
  let component: ViewAchievementsComponent;
  let fixture: ComponentFixture<ViewAchievementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAchievementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
