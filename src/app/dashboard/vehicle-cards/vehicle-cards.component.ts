import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  merge,
  switchMap,
} from 'rxjs';
import { Vehicle } from 'src/app/models/vehicle.model';
import { VehicleData } from 'src/app/models/vehicleData.model';
import { VehicleService } from '../vehicle/vehicle.service';

const waitInput = 300;

@Component({
  selector: 'app-vehicle-cards',
  templateUrl: './vehicle-cards.component.html',
  styleUrls: ['./vehicle-cards.component.css'],
})
export class VehicleCardsComponent {
  vehicleDataInput = new FormControl();
  vin = '2FRHDUYS2Y63NHD22454';
  page = 1;
  vehicles: Vehicle[] = [];
  selectedVehicleId: number = 0;
  selectedVehicle: Vehicle = {};
  selectedVehicleData: VehicleData[] = [];

  allVehicleData = this.vehicleService.getVehicleData().pipe();

  searchVehicleData$ = this.vehicleDataInput.valueChanges.pipe(
    map((searchValue) => searchValue.trim()),
    debounceTime(waitInput),
    filter((searchValue) => searchValue.length >= 5 || !searchValue.length),
    distinctUntilChanged(),
    switchMap((searchValue) => this.vehicleService.getVehicleData(searchValue))
  );

  vehicleData$ = merge(this.allVehicleData, this.searchVehicleData$);

  constructor(private vehicleService: VehicleService) {
    this.vehicleService
      .getVehicles()
      .subscribe((vehicles) => (this.vehicles = vehicles));
  }

  onChange(vehicleId: number) {
    this.selectedVehicle = this.vehicles[vehicleId - 1];
    this.vehicleService
      .getVehicleData(vehicleId)
      .subscribe((vehicle) => (this.selectedVehicleData = vehicle));
  }
  modelChange(value: any) {
    this.vin = value;
  }
}
