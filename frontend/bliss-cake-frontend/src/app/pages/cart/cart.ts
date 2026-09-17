import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../service/cart';

@Component({
selector:'app-cart',
standalone:true,
imports:[CommonModule,RouterModule],
templateUrl:'./cart.html',
styleUrl:'./cart.css'
})
export class Cart{

constructor(public cartService:CartService){}

}