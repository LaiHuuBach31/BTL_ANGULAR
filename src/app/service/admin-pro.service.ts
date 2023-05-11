import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';

const urlApi = "https://build-json-server.vercel.app"

@Injectable({
  providedIn: 'root'
})
export class AdminProService {

  constructor(private http:HttpClient) { }
  
  // duyệt sản phẩm
  getAll():Observable<Product[]>{
    return this.http.get<Product[]>(`${urlApi}/product`)
  }

  // thêm sản phẩm
  addProduct(data:any):Observable<Product>{
    return this.http.post<Product>(`${urlApi}/product`, data)
  }

  // sửa sản phẩm
  editProduct(id:number, data:Product):Observable<Product>{
    return this.http.put<Product>(`${urlApi}/product/${id}`,data)
  }
  
  // xóa sản phẩm
  delete(id:number):Observable<Boolean>{
    return this.http.delete<Boolean>(`${urlApi}/product/${id}`)
  }
}
