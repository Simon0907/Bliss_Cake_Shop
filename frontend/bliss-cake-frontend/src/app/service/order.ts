import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  api = "http://localhost:8081/api/orders";

  constructor(private http:HttpClient) {}

  placeOrder(data:any){
    return this.http.post(this.api, data);
  }

  getOrders(){
    return this.http.get(this.api);
  }
}