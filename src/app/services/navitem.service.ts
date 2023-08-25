import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Inavitem, navItem } from '../models/navitem';

@Injectable({
  providedIn: 'root'
})
export class NavitemService {

  constructor() { }

  getAllNavItem(): Observable<Inavitem[]>{
    return of (navItem)
  }
}
