import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Product } from './interface/product';
import {IProduct} from './interface/product'

@Injectable({
  providedIn: 'root'
})
export class ProductAPIService {
  constructor(private _http: HttpClient) { }
  getProducts():Observable<any>{
      const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
      const requestOptions:Object={
          headers:headers,
          responseType:"text"
      }
      return this._http.get<any>("/products",requestOptions).pipe(
          map(res=>JSON.parse(res) as Array<Product>),
          retry(3),
          catchError(this.handleError))
  }
  handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
  }

  getCakes():Observable<any>{
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/products/cakes",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }

  getCandy():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/products/candy",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }

  getSnack():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/products/snack",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }

  getFreshwater():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/products/freshwater",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }

  postProduct(aProduct:any):Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.post<any>("/products",JSON.stringify(aProduct),requestOptions).pipe(
      map(res=>JSON.parse(res) as Array<IProduct>),
      retry(3),
      catchError(this.handleError))
  }
}
