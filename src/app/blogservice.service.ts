import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const UrlApi = "https://build-json-server.vercel.app" 

@Injectable({
  providedIn: 'root'
})
export class BlogserviceService {

  constructor(private http: HttpClient) { }

  getAllBlog():Observable<any>{
    return this.http.get<any>(`${UrlApi}/blog`)
  }

  getAllVideos():Observable<any>{
    return this.http.get<any>(`${UrlApi}/videos`)
  }

  getAllDarwin():Observable<any>{
    return this.http.get<any>(`${UrlApi}/darwin`)
  }

  getAllProduct():Observable<any>{
    return this.http.get<any>(`${UrlApi}/products`)
  }

  getAllSalah():Observable<any>{
    return this.http.get<any>(`${UrlApi}/salah`)
  }
  
}
