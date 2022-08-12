import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HeaderModule } from '../components/header/header.module';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, HeaderModule],
  exports: [HeaderComponent],
})
export class DashboardModule {}
