import { Component } from '@angular/core';
import {ProductAPIService} from '../product-api.service'
import {Product} from '../interface/product'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: any;
  errMessage: string=''
  constructor(private _service: ProductAPIService){
    this._service.getProducts().subscribe({
      next:(data)=>{this.products=data},
      error:(err)=>{this.errMessage=err}
    })}
    // product= new Product();
    // public setProduct(p:Product)
    // {
    //   this.product=p
    // }
    // onFileSelected(event:any,product:Product) {
    //   let me = this;
    //   let file = event.target.files[0];
  
    //   let reader = new FileReader();
    //   reader.readAsDataURL(file);
    //   reader.onload = function () {
    //     product.image=reader.result!.toString()
    //   };
    //   reader.onerror = function (error) {
    //     console.log('Error: ', error);
    //   };
    // }
    // postProduct()
    // {
    //   this._service.postProduct(this.product).subscribe({
    //     next:(data)=>{this.product=data},
    //     error:(err)=>{this.errMessage=err}
    //   })
    // }

  // product: any;
  // searchProductCategory(category:string)
  // {
  //   this._service.getProductCategory(category).subscribe({
  //     next:(data)=>{this.product=data},
  //     error:(err)=>{this.errMessage=err}
  //   })
  // }
}
