import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeaderComponent } from './component/layouts/header/header.component';
import { SaiderbarComponent } from './component/layouts/saiderbar/saiderbar.component';
import { ListProComponent } from './component/layouts/list-pro/list-pro.component';
import { HomeComponent } from './component/layouts/home/home.component';
import { AddProComponent } from './component/layouts/add-pro/add-pro.component';
import { EditProComponent } from './component/layouts/edit-pro/edit-pro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SaiderbarComponent,
    ListProComponent,
    HomeComponent,
    AddProComponent,
    EditProComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    // FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
