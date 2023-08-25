import { Injectable } from '@angular/core';
import { IsubService, subService } from "../models/subService";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubserviceService {

  constructor() { }

  getAllSubService():Observable<Array<IsubService>>{
    return of (subService);
  }
}
