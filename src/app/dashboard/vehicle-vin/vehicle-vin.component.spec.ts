import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleVinComponent } from './vehicle-vin.component';

describe('VehicleVinComponent', () => {
  let component: VehicleVinComponent;
  let fixture: ComponentFixture<VehicleVinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleVinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleVinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
