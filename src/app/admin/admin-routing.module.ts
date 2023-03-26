import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AddProComponent } from './component/layouts/add-pro/add-pro.component';
import { EditProComponent } from './component/layouts/edit-pro/edit-pro.component';
import { HomeComponent } from './component/layouts/home/home.component';
import { ListProComponent } from './component/layouts/list-pro/list-pro.component';

const routes: Routes = [
    {path:'', component: DashboardComponent, children: [
      {path:'', component:HomeComponent},
      {path:'list-pro', component: ListProComponent},
      {path:'add-pro', component: AddProComponent},
      {path:'edit-pro/:id', component: EditProComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
