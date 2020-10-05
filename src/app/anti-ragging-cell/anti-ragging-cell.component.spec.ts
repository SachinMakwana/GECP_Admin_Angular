import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiRaggingCellComponent } from './anti-ragging-cell.component';

describe('AntiRaggingCellComponent', () => {
  let component: AntiRaggingCellComponent;
  let fixture: ComponentFixture<AntiRaggingCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntiRaggingCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntiRaggingCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
