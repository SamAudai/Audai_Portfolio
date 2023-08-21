import { Injectable } from '@angular/core';
import { Iportfolio, portFolio } from '../models/portfolio';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {

  constructor() { }

  /* getAllPortfolio():Promise<Array<Iportfolio>>{
    return Promise.resolve(portFolio);
  } */

  getAllPortfolio():Observable<Iportfolio[]>{
    return of (portFolio);
  }
}
