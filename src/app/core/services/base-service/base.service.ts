import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environmentProd} from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private baseUrl: String = environmentProd.baseUrls;
  constructor(protected http: HttpClient) {}

  getById(endPoint: String, id: String) :Observable<any> {
    return this.http.get(`${this.baseUrl}/${endPoint}/${id}`);
  }

  getBySlug(endPoint: String, id: String) :Observable<any> {
    return this.http.get(`${this.baseUrl}/${endPoint}/${id}`);
  }
  getAll(endPoint: String) :Observable<any> {
    return this.http.get(`${this.baseUrl}/${endPoint}`);
  }


  //create(endPoint: String, data: any , item?:any)  :Observable<any> {
    //return item !== null
      //? this.http.post(`${this.baseUrl}/${endPoint}/${item}`, data)
     // : this.http.post(`${this.baseUrl}/${endPoint}`, data);
 // }
  create(endPoint: string, data: any): Observable<any>{
    return  this.http.post(`${this.baseUrl}/${endPoint}`, data);
  }
  createById(endPoint: string, data: any, item: any): Observable<any>{
    return this.http.post(`${this.baseUrl}/${endPoint}/${item}`, data);
  }


  update(endPoint: String, data: any , id: string) :Observable<any> {
    return this.http.put(`${this.baseUrl}/${endPoint}/${id}`, data);
  }

  delete(endPoint: String, id: string) :Observable<any> {
    return this.http.delete(`${this.baseUrl}/${endPoint}/${id}`);


  }

  connexion(endPoint: string,data: any): Observable<any>{
    return this.http.post(`${this.baseUrl}/${endPoint}`,data)
  }
}
