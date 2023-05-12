import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './Product/products/products.component';
import { SearchProductComponent } from './Product/search-product/search-product.component';
import { AddProductComponent } from './Product/add-product/add-product.component';
import { FilterProductComponent } from './Product/filter-product/filter-product.component';
import { MainappComponent } from './mainapp/mainapp.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SearchProductComponent,
    AddProductComponent,
    FilterProductComponent,
    MainappComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
