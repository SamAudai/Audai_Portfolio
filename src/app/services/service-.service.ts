import { Injectable } from '@angular/core';
import { Iservice, service } from "../models/service";

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor() { }

  getAllServices():Promise<Array<Iservice>>{
    return Promise.all(service);
  }
}
