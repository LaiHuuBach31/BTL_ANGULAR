import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { PagesComponent } from './pages/pages.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { PageHomeComponent } from './layouts/page-home/page-home.component';
import { PageProductsComponent } from './layouts/page-products/page-products.component';
import { PageHeaderComponent } from './layouts/page-header/page-header.component';
import { PageDetailComponent } from './layouts/page-detail/page-detail.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PageFormComponent } from './layouts/page-form/page-form.component';
import { PageRegisterComponent } from './layouts/page-register/page-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageCartComponent } from './layouts/page-cart/page-cart.component';
import { PageFilterProComponent } from './layouts/page-filter-pro/page-filter-pro.component';
import { PageFilterPlayerComponent } from './layouts/page-filter-player/page-filter-player.component';
import { SearchProPipe } from './search-pro.pipe';



@NgModule({
  declarations: [
    PagesComponent,
    LayoutsComponent,
    PageHomeComponent,
    PageProductsComponent,
    PageHeaderComponent,
    PageDetailComponent,
    PageFormComponent,
    PageRegisterComponent,
    PageCartComponent,
    PageFilterProComponent,
    PageFilterPlayerComponent,
    SearchProPipe
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule
 
  ]
})
export class CustomerModule { }
