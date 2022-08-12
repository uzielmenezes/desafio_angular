import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleCardsComponent } from './vehicle-cards.component';

describe('VehicleCardsComponent', () => {
  let component: VehicleCardsComponent;
  let fixture: ComponentFixture<VehicleCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
