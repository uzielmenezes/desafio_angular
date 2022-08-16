import { Component, OnInit } from '@angular/core';
import { VehicleData } from 'src/app/models/vehicleData.model';
import { VehicleDataService } from '../vehicle/vehicle-data.service';

@Component({
  selector: 'app-vehicle-vin',
  templateUrl: './vehicle-vin.component.html',
  styleUrls: ['./vehicle-vin.component.css'],
})
export class VehicleVinComponent implements OnInit {
  vehicleDataList: VehicleData[] = [];

  constructor(private vehicleDataService: VehicleDataService) {}

  ngOnInit(): void {
    this.vehicleDataService.getVehiclesData().subscribe({
      next: (data: any) => {
        this.vehicleDataList = data['vehicleData'];
      },
      error: (err) => {
        alert('Ocorreu um erro!!');
        console.log(err);
      },
    });
  }
}
