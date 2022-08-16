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
  constructor() {}

  ngOnInit(): void {}
}
