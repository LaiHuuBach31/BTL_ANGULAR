import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Cart } from '../cart';
import { ProductService } from './product.service';

const urlApi = 'http://localhost:3000/cart'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  lengthCart = new Subject<number>();

  constructor(private http:HttpClient, private service:ProductService) { }

  getAllCart():Observable<any>{
    this.service.getCart().subscribe(data => {
      this.lengthCart.next(data.length)
    })
      return this.http.get<any>(`${urlApi}`)
  }

  putCart(data:Cart):Observable<Cart>{
    return this.http.put<Cart>(`${urlApi}/${data.id}`,data)
  }

  deleteCart(id:number):Observable<Boolean>{
    this.service.getCart().subscribe(data => {
      this.lengthCart.next(data.length)
    })
    return this.http.delete<Boolean>(`${urlApi}/${id}`)
  }
}
