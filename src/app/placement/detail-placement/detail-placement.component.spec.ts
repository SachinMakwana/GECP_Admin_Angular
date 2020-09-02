import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPlacementComponent } from './detail-placement.component';

describe('DetailPlacementComponent', () => {
  let component: DetailPlacementComponent;
  let fixture: ComponentFixture<DetailPlacementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPlacementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
