import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsipCellComponent } from './ssip-cell.component';

describe('SsipCellComponent', () => {
  let component: SsipCellComponent;
  let fixture: ComponentFixture<SsipCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsipCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsipCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
