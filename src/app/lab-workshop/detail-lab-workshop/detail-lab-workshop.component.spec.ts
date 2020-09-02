import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLabWorkshopComponent } from './detail-lab-workshop.component';

describe('DetailLabWorkshopComponent', () => {
  let component: DetailLabWorkshopComponent;
  let fixture: ComponentFixture<DetailLabWorkshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailLabWorkshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLabWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
