import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  api = "http://localhost:8081/api/products";

  constructor(private http:HttpClient) {}

  getProducts(){
    return this.http.get(this.api);
  }
}