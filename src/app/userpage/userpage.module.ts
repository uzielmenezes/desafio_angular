import { UserpageComponent } from './userpage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserpageRoutingModule } from './userpage-routing.module';
import { AlertModule } from '../components/alert/alert.module';

@NgModule({
  declarations: [UserpageComponent],
  imports: [CommonModule, UserpageRoutingModule, AlertModule],
})
export class UserpageModule {}
