import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { VehicleCardsComponent } from './vehicle-cards/vehicle-cards.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { VehicleVinComponent } from './vehicle-vin/vehicle-vin.component';
import { VehicleImageComponent } from './vehicle-image/vehicle-image.component';

@NgModule({
  declarations: [
    DashboardComponent,
    VehicleCardsComponent,
    VehicleVinComponent,
    VehicleImageComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
