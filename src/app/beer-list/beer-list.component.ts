import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beer = {
    name: "Yeti",
    price: "$200",
    stock: 20,
    style: "Imperial Stout",
    image: "assets/yeti.png"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
