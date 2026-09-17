import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {}

  getTotalOrders(){
    return this.http.get("http://localhost:5000/api/admin/total-orders");
  }

  getRevenue(){
    return this.http.get("http://localhost:5000/api/admin/monthly-revenue");
  }

  getTopProduct(){
    return this.http.get("http://localhost:5000/api/admin/top-product");
  }

  getLeastProduct(){
    return this.http.get("http://localhost:5000/api/admin/least-product");
  }

  getCustomers(){
    return this.http.get("http://localhost:5000/api/admin/customers");
  }

}