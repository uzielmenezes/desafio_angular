import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  merge,
  switchMap,
} from 'rxjs';
import { VehicleDataService } from '../vehicle/vehicle-data.service';

const WAIT_INPUT = 300;

@Component({
  selector: 'app-vehicle-vin',
  templateUrl: './vehicle-vin.component.html',
  styleUrls: ['./vehicle-vin.component.css'],
})
export class VehicleVinComponent {
  vehiclesDataInput = new FormControl();
  allVehicleData$ = this.vehicleDataService.getVehiclesData().pipe();

  filterThroughInput$ = this.vehiclesDataInput.valueChanges.pipe(
    debounceTime(WAIT_INPUT),
    filter((InputValue) => InputValue.length >= 3 || InputValue.length),
    distinctUntilChanged(),
    switchMap((selectValue) =>
      this.vehicleDataService.getVehiclesData(selectValue)
    )
  );
  vehiclesData$ = merge(this.allVehicleData$, this.filterThroughInput$);

  constructor(private vehicleDataService: VehicleDataService) {}
}
