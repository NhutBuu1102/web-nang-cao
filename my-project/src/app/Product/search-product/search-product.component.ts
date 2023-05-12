import { Component } from '@angular/core';
import {ProductAPIService} from '../product-api.service'

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent {
  // product: any;
  // errMessage: string=''
  // constructor(private _service: ProductAPIService){}
  // searchProductCategory(category:string)
  // {
  //   this._service.getProductCategory(category).subscribe({
  //     next:(data)=>{this.product=data},
  //     error:(err)=>{this.errMessage=err}
  //   })
  // }
}
