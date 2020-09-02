import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLabWorkshopComponent } from './add-lab-workshop.component';

describe('AddLabWorkshopComponent', () => {
  let component: AddLabWorkshopComponent;
  let fixture: ComponentFixture<AddLabWorkshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLabWorkshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLabWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
