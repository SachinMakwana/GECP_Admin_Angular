import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWomenCellComponent } from './add-women-cell.component';

describe('AddWomenCellComponent', () => {
  let component: AddWomenCellComponent;
  let fixture: ComponentFixture<AddWomenCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWomenCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWomenCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
