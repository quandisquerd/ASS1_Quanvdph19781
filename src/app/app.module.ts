import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { DashbordComponent } from './component/admin/dashbord/dashbord.component';
import { ListProductComponent } from './component/admin/list-product/list-product.component';
import { AddProductComponent } from './component/admin/add-product/add-product.component';
import { EditProductComponent } from './component/admin/edit-product/edit-product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    AdminLayoutComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailComponent,
    DashbordComponent,
    ListProductComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
