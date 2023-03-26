import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCartComponent } from './layouts/page-cart/page-cart.component';
import { PageDetailComponent } from './layouts/page-detail/page-detail.component';
import { PageFilterPlayerComponent } from './layouts/page-filter-player/page-filter-player.component';
import { PageFilterProComponent } from './layouts/page-filter-pro/page-filter-pro.component';
import { PageFormComponent } from './layouts/page-form/page-form.component';
import { PageHomeComponent } from './layouts/page-home/page-home.component';
import { PageProductsComponent } from './layouts/page-products/page-products.component';
import { PageRegisterComponent } from './layouts/page-register/page-register.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
    {path:'', component: PagesComponent, children: [
        {path:'', component: PageHomeComponent},
        {path:'product', component: PageProductsComponent},
        {path:'detail/:id', component: PageDetailComponent},
        // {path:'filter/:id', component:PageFilterProComponent},
        // {path:'filterplayer/:id', component:PageFilterPlayerComponent},
        {path:'form', component: PageFormComponent},
        {path:'register', component: PageRegisterComponent},
        {path:'cart', component: PageCartComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
