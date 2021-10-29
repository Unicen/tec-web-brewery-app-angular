import { Component, OnInit } from '@angular/core';
import { Beer } from './beer';

@Component({
  selector: 'beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beers : Beer[]  = [{
    name: "Yeti",
    price: 250,
    stock: 1,
    style: "Imperial Stout",
    image: "assets/yeti.png",
    clearance: false,
    quantity: 0,
  },
  {
    name: "Bitter Call Saul",
    price: 400,
    stock: 0,
    style: "Bitter",
    image: "assets/bitter.png",
    clearance: false,
    quantity: 0,
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
  }

  upQuantity(beer : Beer): void{
    if(beer.stock > beer.quantity) {
      beer.quantity ++;
    }
  }

  downQuantity(beer : Beer): void{
    if(beer.quantity > 0) {
      beer.quantity --;
    }
  }

  verifyBeerQuantity(beer : Beer): void {
    if(beer.stock < beer.quantity) {
      alert("No se pueden pedir más de las cervezas que hay en stock");
      beer.quantity = beer.stock;
    }

    if(beer.quantity < 0) {
      alert("No se pueden pedir menos que 0 cervezas");
      beer.quantity = 0;
    }
  }

}
