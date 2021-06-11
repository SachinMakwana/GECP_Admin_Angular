import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VissionMissionComponent } from './vission-mission.component';

describe('VissionMissionComponent', () => {
  let component: VissionMissionComponent;
  let fixture: ComponentFixture<VissionMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VissionMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VissionMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
