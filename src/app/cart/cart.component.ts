import { Component, OnInit } from '@angular/core';
import { BeerCartService } from '../beer-cart.service';
import { Beer } from '../beer-list/beer';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  beers : Beer[] = [];
  constructor(private beersCartService: BeerCartService) { }

  ngOnInit(): void {
    this.beersCartService.beers
    .subscribe(data => this.beers = data);
  }

  total(){
    let sum=0;
    this.beers.forEach(beer => {
      sum += beer.quantity * beer.price
    });
    return sum;
  }

}
