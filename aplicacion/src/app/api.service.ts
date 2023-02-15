import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
export interface ApiResult {
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(public http:HttpClient) { }
  getProductos(){
    return this.http.get<ApiResult>('http://localhost:3000/api')
  }
}
