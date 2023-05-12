import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ProductAPIService} from '../product-api.service';
import {Product} from '../interface/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product= new Product();
  products: any;
  errMessage:string='';
  constructor(private _service: ProductAPIService){}
  public setProduct(p:Product)
  {
    this.product=p
  }
  onFileSelected(event:any,product:Product) {
    let me = this;
    let file = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      product.image=reader.result!.toString()
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  postProduct()
  {
    console.log(this.product); 
    this._service.postProduct(this.product).subscribe({
      next:(data)=>{this.product=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
