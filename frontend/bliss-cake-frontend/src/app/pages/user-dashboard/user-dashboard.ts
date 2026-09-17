import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-dashboard.html',
  styleUrl: './user-dashboard.css'
})
export class UserDashboard implements OnInit {

  username:string = "User";

  constructor(private router:Router){}

  ngOnInit(){

    const user = localStorage.getItem("user");

    if(user){

      const userData = JSON.parse(user);

      this.username = userData.username;

    }

  }

  logout(){

    localStorage.removeItem("user");

    this.router.navigate(['/']);

  }

}