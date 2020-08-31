import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabWorkshopComponent } from './lab-workshop.component';

describe('LabWorkshopComponent', () => {
  let component: LabWorkshopComponent;
  let fixture: ComponentFixture<LabWorkshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabWorkshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
