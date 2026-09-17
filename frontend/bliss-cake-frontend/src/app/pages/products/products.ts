import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class ProductsComponent {

  products = [

    { name: 'Classic Brownie', price: 70, img: 'assets/products/brownie.jpg' },

    { name: 'Nutella Brownie', price: 90, img: 'assets/products/nutella brow.jpg' },

    { name: 'Biscoff Brownie', price: 100, img: 'assets/products/biscoff brow.jpg' },

    { name: 'Choco Chunk Brownie', price: 100, img: 'assets/products/chunk.jpeg' },

    { name: 'Double Chocolate Brownie', price: 99, img: 'assets/products/double brow.png' },

    { name: 'Nuts Brownie', price: 100, img: 'assets/products/browNuts.webp' },

    { name: 'Rosemilk Tres Leches', price: 100, img: 'assets/products/rose.jpg' },

    { name: 'Rasamalai Tres Leches', price: 120, img: 'assets/products/rasa.webp' },

    { name: 'Milk Tres Leches', price: 90, img: 'assets/products/milk.webp' },

    { name: 'Mocha Tres Leches', price: 120, img: 'assets/products/mocha.jpg' },

    { name: 'Banoffee Pie', price: 110, img: 'assets/products/bano.webp' },

    { name: 'Tiramisu', price: 150, img: 'assets/products/tira.jpg' },

    { name: 'Mini Dream Cake', price: 100, img: 'assets/products/dream.jpg' },

    { name: 'Arabian Delight', price: 70, img: 'assets/products/arabian.jpg' },

    { name: 'Hot Chocolate', price: 50, img: 'assets/products/hot2.jpg' },

    { name: 'London Strawberry', price: 100, img: 'assets/products/london.png' }

  ];

}