import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{AddProductComponent} from '../app/Product/add-product/add-product.component';
import{FilterProductComponent} from '../app/Product/filter-product/filter-product.component'
import {ProductsComponent } from '../app/Product/products/products.component'

const routes: Routes = [
  {path:"cakes", component: FilterProductComponent},
  {path:"snack", component: FilterProductComponent},
  {path:"candy", component: FilterProductComponent},
  {path:"freshwater", component: FilterProductComponent},
  {path:"products", component: FilterProductComponent},
  {path:"products", component: ProductsComponent},
  {path:"add", component:AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
