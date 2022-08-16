import { Component, OnInit } from '@angular/core';
import { Vehicles } from '../models/vehicle.model';
import { VehiclesData } from '../models/vehicleData.model';
import { VehicleDataService } from './vehicle/vehicle-data.service';
import { VehicleService } from './vehicle/vehicle.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  vehicleList: Vehicles = [];
  vehicleDataList: VehiclesData = [];

  constructor(
    private vehicleService: VehicleService,
    private vehicleDataService: VehicleDataService
  ) {}

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe({
      next: (data: any) => {
        this.vehicleList = data['vehicles'];
      },
      error: (err) => {
        alert('Ocorreu um erro!!');
        console.log(err);
      },
    });

    this.vehicleDataService.getVehiclesData().subscribe({
      next: (data: any) => {
        this.vehicleList = data['vehicleData'];
      },
      error: (err) => {
        alert('Ocorreu um erro!!');
        console.log(err);
      },
    });
  }
}
