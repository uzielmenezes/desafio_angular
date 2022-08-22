import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge, switchMap } from 'rxjs';
import { VehicleDataService } from '../vehicle/vehicle-data.service';

@Component({
  selector: 'app-vehicle-vin',
  templateUrl: './vehicle-vin.component.html',
  styleUrls: ['./vehicle-vin.component.css'],
})
export class VehicleVinComponent {
  vehiclesDataInput = new FormControl();

  selected = '2FRHDUYS2Y63NHD22454';
  allVehicleData$ = this.vehicleDataService.getVehiclesData().pipe();

  filterThroughInput$ = this.vehiclesDataInput.valueChanges.pipe(
    switchMap((selectValue) =>
      this.vehicleDataService.getVehiclesData(selectValue)
    )
  );
  vehiclesData$ = merge(this.allVehicleData$, this.filterThroughInput$);

  constructor(private vehicleDataService: VehicleDataService) {}
}
