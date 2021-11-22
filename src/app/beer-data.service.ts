import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Beer } from './beer-list/beer';
import { environment } from '../environments/environment';

const URL = environment.apiUrl + 'beers';

@Injectable({
  providedIn: 'root'
})
export class BeerDataService {

  private _beers : Beer[] = [];
  private _beersSubjects : BehaviorSubject<Beer[]> = new BehaviorSubject(this._beers);
  public beers : Observable<Beer[]> = this._beersSubjects.asObservable();
  
  constructor(private http: HttpClient) { 
    this.http.get<Beer[]>(URL).subscribe(data => {
      this._beers.push(...data);
    });
  }

  create(beer: Beer): void{
    this.http.post<Beer>(URL, beer).subscribe({
      error: error => {
        console.error('There was an error!', error);
    },
      next: data => {
        this._beers.push(data)
      }
    });
  }

}
