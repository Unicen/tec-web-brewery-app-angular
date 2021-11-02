import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from './beer-list/beer';

const URL = "http://localhost:3000/beers";

@Injectable({
  providedIn: 'root'
})
export class BeerDataService {

  constructor(private http: HttpClient) { }
  
  getAll(): Observable<Beer[]> {
    return this.http.get<Beer[]>(URL);
  }

}
