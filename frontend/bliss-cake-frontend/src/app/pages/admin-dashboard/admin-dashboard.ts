import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css'
})
export class AdminDashboard implements OnInit {

  totalOrders:any;
  revenue:any;
  topProduct:any;
  leastProduct:any;

  constructor(private adminService:AdminService,private router:Router){}

  ngOnInit(){

    this.adminService.getTotalOrders().subscribe((res:any)=>{
      this.totalOrders = res.totalOrders;
    });

    this.adminService.getRevenue().subscribe((res:any)=>{
      this.revenue = res.totalRevenue;
    });

    this.adminService.getTopProduct().subscribe((res:any)=>{
      this.topProduct = res.name;
    });

    this.adminService.getLeastProduct().subscribe((res:any)=>{
      this.leastProduct = res.name;
    });

  }

  logout(){

localStorage.removeItem("admin");

this.router.navigate(['/login']);

}
}