import { Component, OnInit } from '@angular/core';
import { BeerCartService } from '../beer-cart.service';
import { BeerDataService } from '../beer-data.service';
import { Beer } from './beer';

@Component({
  selector: 'beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beers : Beer[]  = [];
  
  constructor(private beersDataService: BeerDataService, private beersCartService: BeerCartService) { }

  ngOnInit(): void {
    this.beersDataService.getAll().subscribe( beers => this.beers = beers);
  }

  upQuantity(beer : Beer): void{
    if(beer.stock > beer.quantity) {
      beer.quantity ++;
      this.beersCartService.addToCart(beer);
    }
  }

  downQuantity(beer : Beer): void{
    if(beer.quantity > 0) {
      beer.quantity --;
      this.beersCartService.addToCart(beer);
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
