import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems:any[] = [];

  addToCart(product:any){

    const existing = this.cartItems.find(p => p.name === product.name);

    if(existing){
      existing.quantity += 1;
    } else {
      this.cartItems.push({...product, quantity:1});
    }

  }

  getItems(){
    return this.cartItems;
  }

  getCartCount(){
    return this.cartItems.reduce((total,item)=> total + item.quantity,0);
  }

  getTotalPrice(){
    return this.cartItems.reduce((total,item)=> total + item.price * item.quantity,0);
  }

  removeItem(index:number){
    this.cartItems.splice(index,1);
  }

  // ✅ Increase quantity
  increaseQty(index:number){
    this.cartItems[index].quantity++;
  }

  // ✅ Decrease quantity
  decreaseQty(index:number){
    if(this.cartItems[index].quantity > 1){
      this.cartItems[index].quantity--;
    }
  }

  // ✅ Clear cart after order
  clearCart(){
    this.cartItems = [];
  }

}