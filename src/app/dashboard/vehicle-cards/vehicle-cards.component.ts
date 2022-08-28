import { Component } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle.model';
import { VehicleData } from 'src/app/models/vehicleData.model';
import { VehicleService } from '../vehicle/vehicle.service';

@Component({
  selector: 'app-vehicle-cards',
  templateUrl: './vehicle-cards.component.html',
  styleUrls: ['./vehicle-cards.component.css'],
})
export class VehicleCardsComponent {
  vehicles: Vehicle[] = [];
  selectedVehicleId: number = 0;
  selectedVehicle: Vehicle = {};
  selectedVehicleData: VehicleData = {};

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
}
