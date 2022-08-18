import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge, switchMap } from 'rxjs';
import { VehicleService } from '../vehicle/vehicle.service';

@Component({
  selector: 'app-vehicle-cards',
  templateUrl: './vehicle-cards.component.html',
  styleUrls: ['./vehicle-cards.component.css'],
})
export class VehicleCardsComponent {
  vehiclesInput = new FormControl();
  selected = 'Ranger';
  imgUrl = 'assets/img/Ranger.png';
  allVehicles$ = this.vehicleService.getVehicles().pipe();

  filterThroughInput$ = this.vehiclesInput.valueChanges.pipe(
    switchMap((selectValue) => this.vehicleService.getVehicles(selectValue))
  );

  vehicles$ = merge(this.allVehicles$, this.filterThroughInput$);

  constructor(private vehicleService: VehicleService) {}

  changeFn(e: any) {
    this.selected = e.target.value;
    this.imgUrl = `assets/img/${this.selected}.png`;
    console.log(this.imgUrl);
  }
}
