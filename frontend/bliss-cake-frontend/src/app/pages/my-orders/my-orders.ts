import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-orders.html',
  styleUrl: './my-orders.css'
})
export class MyOrders implements OnInit {

  orders:any[] = [];

  username:string = "";

  constructor(private http:HttpClient){}

  ngOnInit(){

    const user = JSON.parse(
      localStorage.getItem("user") || '{}'
    );

    this.username = user.username;

    this.http.get<any[]>(
      `http://localhost:8081/api/orders/user/${this.username}`
    ).subscribe(res=>{

      this.orders = res;

    });

  }

}