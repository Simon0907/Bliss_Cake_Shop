import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CartService } from '../../service/cart';
import { OrderService } from '../../service/order';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {

  name:string = "";
  email:string = "";
  phone:string = "";
  address:string = "";

  constructor(
    public cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  placeOrder(){

    if(this.cartService.getItems().length === 0){

      alert("Cart is empty");
      return;

    }

    const user = JSON.parse(
      localStorage.getItem("user") || '{}'
    );

    const order = {

      username:user.username || "Guest",

      customerName:this.name,

      email:this.email,

      phone:this.phone,

      address:this.address,

      products:JSON.stringify(
        this.cartService.getItems()
      ),

      totalPrice:this.cartService.getTotalPrice()

    };

    this.orderService.placeOrder(order)
    .subscribe({

      next:(res:any)=>{

        alert("Order placed successfully ✅");

        this.cartService.clearCart();

        this.router.navigate(['/success']);

      },

      error:(err)=>{

        console.log(err);

        alert("Order failed");

      }

    });

  }

}