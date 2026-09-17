import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector:'app-navbar',
  standalone:true,
  imports:[CommonModule,RouterModule],
  templateUrl:'./navbar.html',
  styleUrl:'./navbar.css'
})
export class Navbar implements OnInit {

  user:any;

  constructor(
    public cartService:CartService,
    private router:Router
  ){}

  ngOnInit(){

    const data = localStorage.getItem("user");

    if(data){

      this.user = JSON.parse(data);

    }

  }

  logout(){

    localStorage.removeItem("user");

    this.user = null;

    this.router.navigate(['/']);

  }

}