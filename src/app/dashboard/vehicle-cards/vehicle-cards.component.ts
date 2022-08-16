import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle.model';
import { VehicleService } from '../vehicle/vehicle.service';

@Component({
  selector: 'app-vehicle-cards',
  templateUrl: './vehicle-cards.component.html',
  styleUrls: ['./vehicle-cards.component.css'],
})
export class VehicleCardsComponent implements OnInit {
  vehicleList: Vehicle[] = [];
  constructor(private vehicleService: VehicleService) {}

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
  }
}
