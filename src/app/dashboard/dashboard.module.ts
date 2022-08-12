import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { VehicleCardsComponent } from './vehicle-cards/vehicle-cards.component';

@NgModule({
  declarations: [DashboardComponent, VehicleCardsComponent],
  imports: [CommonModule],
})
export class DashboardModule {}
