import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { ProductsComponent } from './pages/products/products';
import { Cart } from './pages/cart/cart';
import { Checkout } from './pages/checkout/checkout';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Contact } from './pages/contact/contact';
import { About } from './pages/about/about';
import { Orders } from './pages/orders/orders';
import { OrderSuccess } from './pages/order-success/order-success';
import { AdminDashboard } from './pages/admin-dashboard/admin-dashboard';
import { adminGuard } from './auth/admin-guard';
import { UserDashboard } from './pages/user-dashboard/user-dashboard';
import { MyOrders } from './pages/my-orders/my-orders';

export const routes: Routes = [

{ path: '', component: Home },

{ path: 'about', component: About },

{ path: 'products', component: ProductsComponent },

{ path: 'orders', component: Orders },

{ path: 'cart', component: Cart },

{ path: 'checkout', component: Checkout },

{ path: 'login', component: Login },

{ path: 'contact', component: Contact },

{ path: 'register', component: Register },

{ path:'success', component:OrderSuccess },

{
 path:'admin-dashboard',
 component:AdminDashboard,
 canActivate:[adminGuard]
},
{
  path:'user-dashboard',
  component:UserDashboard
},
{
  path:'my-orders',
  component:MyOrders
},
];