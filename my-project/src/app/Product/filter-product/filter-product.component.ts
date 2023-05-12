import { Component } from '@angular/core';
import { ProductAPIService } from '../product-api.service'
import { Router } from '@angular/router';
import {Product} from '../interface/product'

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./filter-product.component.css']
})
export class FilterProductComponent {
  products: any;
  errMessage:string=''
  constructor(private _service: ProductAPIService, private router: Router){
    this._service.getProducts().subscribe({
      next:(data)=>{this.products=data},
      error:(err)=>{this.errMessage=err}
    })}

    getAllProducts(){
      this._service.getProducts().subscribe({
        next:(data)=>{this.products=data},
        error:(err)=>{this.errMessage=err}
      })
    }

    getCandy(){
      this._service.getCandy().subscribe({
        next:(data)=>{this.products=data},
        error:(err)=>{this.errMessage=err}
      })
    }

    getCakes(){
      this._service.getCakes().subscribe({
        next:(data)=>{this.products=data},
        error:(err)=>{this.errMessage=err}
      })
    }

    getSnack(){
      this._service.getSnack().subscribe({
        next:(data)=>{this.products=data},
        error:(err)=>{this.errMessage=err}
      })
    }    

    getFreshwater(){
      this._service.getFreshwater().subscribe({
        next:(data)=>{this.products=data},
        error:(err)=>{this.errMessage=err}
      })
    }  
}
