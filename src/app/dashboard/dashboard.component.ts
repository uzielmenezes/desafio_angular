import { Component, OnInit } from '@angular/core';
import { Vehicles } from '../models/vehicle.model';
import { VehicleService } from './vehicle/vehicle.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  vehicleList: Vehicles = [];

  constructor(private vehicleServvice: VehicleService) {}

  ngOnInit(): void {
    this.vehicleServvice.getVehicle().subscribe({
      next: (data: any) => {
        this.vehicleList = data['vehicles'];
      },
      error: (err) => {
        alert('Ocorreu um erro!!');
        console.log(err);
      },
    });
  }
}
