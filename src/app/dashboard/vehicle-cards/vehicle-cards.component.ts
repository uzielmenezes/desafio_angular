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
  selectedVehicleDetails: VehicleData = {};

  // quando a pagina carrega, inicia a busca pelos carros, ao finalizar atribui na variavel vehicles, usada para renderizar o select
  constructor(private vehicleService: VehicleService) {
    this.vehicleService
      .getVehicles()
      .subscribe((vehicles) => (this.vehicles = vehicles));
  }

  // quando muda o select busca os detalhes do carro selecionado e atribui na variavel selectedVehicleDetails
  onChange(vehicleId: number) {
    this.selectedVehicle = this.vehicles[vehicleId - 1];
    this.vehicleService
      .getVehicleData(vehicleId)
      .subscribe((vehicle) => (this.selectedVehicleDetails = vehicle));
  }
}
