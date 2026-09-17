import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {

  username:string = "";
  email:string = "";
  password:string = "";

  isSignup = false;

  constructor(
    private router:Router,
    private userService:UserService
  ){}

  toggle(){
    this.isSignup = !this.isSignup;
  }

  // ================= REGISTER =================

  register(){

    const userData = {

      username:this.username,
      email:this.email,
      password:this.password

    };

    this.userService.register(userData)
    .subscribe({

      next:(res:any)=>{

        alert("Account Successfully Created");

        this.isSignup = false;

        this.username = "";
        this.email = "";
        this.password = "";

      },

      error:(err)=>{

        console.log(err);

        alert("Registration Failed");

      }

    });

  }

  // ================= LOGIN =================

  login(){

  // ADMIN LOGIN
  if(
    this.email === "admin@bliss.com" &&
    this.password === "admin123"
  ){

    localStorage.setItem("admin","true");

    this.router.navigate(['/admin-dashboard']);

    return;

  }

  const loginData = {

    email:this.email,
    password:this.password

  };

  this.userService.login(loginData)
  .subscribe({

    next:(res:any)=>{

      if(res.success){

        localStorage.setItem(
          "user",
          JSON.stringify(res)
        );

        alert("Login Successful");

        this.router.navigate(['/user-dashboard']);

      }
      else{

        alert(res.message);

      }

    },

    error:(err)=>{

      console.log(err);

      alert("Login Failed");

    }

  });

}

}