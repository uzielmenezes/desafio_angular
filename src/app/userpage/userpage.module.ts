import { UserpageComponent } from './userpage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserpageRoutingModule } from './userpage-routing.module';


@NgModule({
  declarations: [
    UserpageComponent
  ],
  imports: [
    CommonModule,
    UserpageRoutingModule
  ]
})
export class UserpageModule { }
