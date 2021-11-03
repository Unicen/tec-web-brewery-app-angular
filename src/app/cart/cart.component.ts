import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer-list/beer';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  total : number = 0;
  beers : Beer[]  =
  [{
    name: "Yeti",
    price: 250,
    stock: 1,
    style: "Imperial Stout",
    image: "assets/yeti.png",
    clearance: false,
    quantity: 2,
  },
  {
    name: "Bitter Call Saul",
    price: 400,
    stock: 0,
    style: "Bitter",
    image: "assets/bitter.png",
    clearance: false,
    quantity: 3,
  },
  {
    name: "Scotch",
    price: 150,
    stock: 220,
    style: "Scotch",
    image: "assets/scotch.png",
    clearance: true,
    quantity: 0,
  }]
  constructor() { }

  ngOnInit(): void {
    this.beers.forEach(beer => {
      this.total += beer.quantity * beer.price
    });
  }

}
