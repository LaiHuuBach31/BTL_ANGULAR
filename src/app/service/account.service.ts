import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const urlApi = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient ) { }

  // đăng kí customer
  register(data:any):Observable<any>{
    return this.http.post<any>(`${urlApi}/account`,data)
  }

  // đăng nhập customer
  login(data:any):Observable<any>{
    return this.http.get<any>(`${urlApi}/account?email=${data.email}&password=${data.password}`)
  }

  // đăng nhập admin
  getAllAcc():Observable<any>{
    return this.http.get<any>(`${urlApi}/account`)
  }
}
