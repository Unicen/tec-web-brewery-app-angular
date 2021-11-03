import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Beer } from './beer-list/beer';

@Injectable({
  providedIn: 'root'
})
export class BeerCartService {

  private _beers : Beer[] = [];
  private _beersSubjects : BehaviorSubject<Beer[]> = new BehaviorSubject(this._beers);
  public beers : Observable<Beer[]> = this._beersSubjects.asObservable();
  constructor() { }

  addToCart(beer:Beer){
    let index = this._beers.findIndex(b => b.name === beer.name);
    if(index === -1)
      this._beers.push(beer);
    else
      this._beers[index].quantity = beer.quantity;
    if (beer.quantity == 0){
      this._beers.splice(index,1);
    }
  }
}
