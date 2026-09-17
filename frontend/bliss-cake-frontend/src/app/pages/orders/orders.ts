import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../service/cart';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.html',
  styleUrl: './orders.css'
})
export class Orders {

  constructor(private cartService: CartService) {}

  products = [

  // Brownies
  { name: 'Classic Brownie', price: 70, img: 'assets/products/brownie.jpg', category:'brownie' },
  { name: 'Nutella Brownie', price: 90, img: 'assets/products/nutella brow.jpg', category:'brownie' },
  { name: 'Biscoff Brownie', price: 100, img: 'assets/products/biscoff brow.jpg', category:'brownie' },
  { name: 'Choco Chunk Brownie', price: 100, img: 'assets/products/chunk.jpeg', category:'brownie' },
  { name: 'Double Chocolate Brownie', price: 99, img: 'assets/products/double brow.png', category:'brownie' },
  { name: 'Nuts Brownie', price: 100, img: 'assets/products/browNuts.webp', category:'brownie' },
  { name: 'Orea Brownie', price: 100, img: 'assets/products/oreo_brownie.jpg', category:'brownie' },

  // Tres Leches
  { name: 'Rosemilk Tres Leches', price: 100, img: 'assets/products/rose.jpg', category:'tres' },
  { name: 'Rasamalai Tres Leches', price: 120, img: 'assets/products/rasa.webp', category:'tres' },
  { name: 'Milk Tres Leches', price: 90, img: 'assets/products/milk.webp', category:'tres' },
  { name: 'Mocha Tres Leches', price: 120, img: 'assets/products/mocha.jpg', category:'tres' },

  // Our Specials
  { name: 'Banoffee Pie', price: 110, img: 'assets/products/bano.webp', category:'special' },
  { name: 'Tiramisu', price: 150, img: 'assets/products/tira.jpg', category:'special' },
  { name: 'Mini Dream Cake', price: 100, img: 'assets/products/dream.jpg', category:'special' },
  { name: 'Arabian Delight', price: 70, img: 'assets/products/arabian.jpg', category:'special' },
  { name: 'Hot Chocolate', price: 50, img: 'assets/products/hot2.jpg', category:'special' },
  { name: 'London Strawberry', price: 100, img: 'assets/products/london.png', category:'special' }

];



  addToCart(product:any){

    this.cartService.addToCart(product);

    alert(product.name + " added to cart");

  }

}