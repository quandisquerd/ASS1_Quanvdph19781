import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { DashbordComponent } from './component/admin/dashbord/dashbord.component';
import { ListProductComponent } from './component/admin/list-product/list-product.component';
import { EditProductComponent } from './component/admin/edit-product/edit-product.component';
import { AddProductComponent } from './component/admin/add-product/add-product.component';

const routes: Routes = [
  {
    path: '', component: BaseLayoutComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'product', component: ProductComponent },
      { path: 'product/:id', component: ProductDetailComponent },

    ]
  },
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { path: '',redirectTo:'dashbord' , pathMatch:"full"},
      { path: 'dashbord', component: DashbordComponent },
      { path: 'product', component: ListProductComponent },
      { path: 'product/:id/edit', component: EditProductComponent },
      { path: 'product/add', component: AddProductComponent },
      

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
