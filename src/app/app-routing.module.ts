import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'admin',canActivate: [AuthGuard] , loadChildren: ()=> import('./admin/admin.module').then((m) => m.AdminModule)},
  {path:'', loadChildren: () => import('./customer/customer.module').then((m) => m.CustomerModule)},
  {path:'loginAdmin', loadChildren: () => import('./login-admin/login-admin.module').then((m)=> m.LoginAdminModule)}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
