import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Cart } from '../cart';
import { Category } from '../category';
import { Product } from '../product';

const urlApi = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  lengthCart = new Subject<number>();

  constructor(private http: HttpClient) {}

  getAllforshop():Observable<Category[]>{
    return this.http.get<Category[]>(`${urlApi}/forshop`)
  }
  getAllfeatured():Observable<Category[]>{
    return this.http.get<Category[]>(`${urlApi}/featured`)
  }
  getAllplayer():Observable<Category[]>{
    return this.http.get<Category[]>(`${urlApi}/player`)
  }
  getAlldepartments():Observable<Category[]>{
    return this.http.get<Category[]>(`${urlApi}/departments`)
  }

  // duyệt sản phẩm
  getAllproduct():Observable<Product[]>{
    this.getCart().subscribe(data => {
      this.lengthCart.next(data.length)
    })
    return this.http.get<Product[]>(`${urlApi}/product`)
  }
  getAllproductPage(number:number):Observable<Product[]>{
    this.getCart().subscribe(data => {
      this.lengthCart.next(data.length)
    })
    return this.http.get<Product[]>(`${urlApi}/product?_page=${number}&_limit=9`)
  }

  // xem chi tiết sản phẩm
  getDetail(id:number):Observable<Product>{
    this.getCart().subscribe(data => {
      this.lengthCart.next(data.length)
    })
      return this.http.get<Product>(`${urlApi}/product/${id}`)
  }

  // lọc sản phẩm theo giới tính
  showPro(id:number):Observable<Product[]>{
    return this.http.get<Product[]>(`${urlApi}/product/?forshop_id=${id}`)
  }

  // lọc sản phẩm theo tên
  showPlayer(id:number):Observable<Product[]>{
    return this.http.get<Product[]>(`${urlApi}/product/?player_id=${id}`)
  }

  // thêm sản phẩm
  addProduct(data:any):Observable<Product>{
    return this.http.post<Product>(`${urlApi}/product`, data)
  }

  // sửa sản phẩm
  editProduct(id:number, data:any):Observable<Product>{
    return this.http.put<Product>(`${urlApi}/product/${id}`, data)
  }

  // xóa sản phẩm
  deleteProduct(id:number):Observable<Product>{
    return this.http.delete<Product>(`${urlApi}/product/${id}`)
  }
  
  
  // duyệt hết  phẩm vào trong cart xem có hay không
  getCart():Observable<any>{
    this.http.get<Cart[]>(`${urlApi}/cart`).subscribe(data=>{
      this.lengthCart.next(data.length)
    })
    return this.http.get<any>(`${urlApi}/cart`)
  }
  // 
  putCart(data:Cart):Observable<Cart>{
    return this.http.put<Cart>(`${urlApi}/cart/${data.id}`,data)
  }
  // thêm sản phẩm vào trong cart
  postCart(data:Cart):Observable<Cart>{
    this.getCart().subscribe(data => {
      this.lengthCart.next(data.length)
    })
    return this.http.post<Cart>(`${urlApi}/cart`,data)
  }
}
