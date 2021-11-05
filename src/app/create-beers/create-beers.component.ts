import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BeerDataService } from '../beer-data.service';
import { Beer } from '../beer-list/beer';

@Component({
  selector: 'create-beers',
  templateUrl: './create-beers.component.html',
  styleUrls: ['./create-beers.component.scss']
})
export class CreateBeersComponent implements OnInit {


  beerForm = new FormGroup({
    name: new FormControl(''),
    style: new FormControl(''),
    price: new FormControl(''),
    stock: new FormControl(''),
    clearance: new FormControl(false),
    image: new FormControl('assets/beer.png'),
    quantity: new FormControl(0),

  });
  constructor(private beersDataService: BeerDataService) { }

  ngOnInit(): void {
  }

  createBeer() {
    this.beersDataService.create(this.beerForm.value);
  }

}
