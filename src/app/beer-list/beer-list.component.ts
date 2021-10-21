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
    stock: 0,
    style: "Imperial Stout",
    image: "assets/yeti.png",
    clearance: false,
  },
  {
    name: "Bitter Call Saul",
    price: 400,
    stock: 10,
    style: "Bitter",
    image: "assets/bitter.png",
    clearance: false,
  },
  {
    name: "Scotch",
    price: 150,
    stock: 220,
    style: "Scotch",
    image: "assets/scotch.png",
    clearance: true,
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
