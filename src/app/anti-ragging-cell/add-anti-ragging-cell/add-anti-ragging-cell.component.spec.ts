import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAntiRaggingCellComponent } from './add-anti-ragging-cell.component';

describe('AddAntiRaggingCellComponent', () => {
  let component: AddAntiRaggingCellComponent;
  let fixture: ComponentFixture<AddAntiRaggingCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAntiRaggingCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAntiRaggingCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
