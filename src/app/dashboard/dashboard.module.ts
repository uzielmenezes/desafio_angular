import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { VehicleCardsComponent } from './vehicle-cards/vehicle-cards.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { VehicleVinComponent } from './vehicle-vin/vehicle-vin.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    VehicleCardsComponent,
    VehicleVinComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, ReactiveFormsModule],
})
export class DashboardModule {}
