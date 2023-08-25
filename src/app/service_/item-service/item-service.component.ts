import { Component, OnInit } from '@angular/core';
import { Iservice } from 'src/app/models/service';
import { ServiceService } from 'src/app/services/service-.service';

@Component({
  selector: 'app-item-service',
  templateUrl: './item-service.component.html',
  styleUrls: ['./item-service.component.css']
})

export class ItemServiceComponent implements OnInit {

  SERVICE!:Array<Iservice>;

  constructor(private service:ServiceService){}

  ngOnInit(): void {
    this.service.getAllServices().then(res=> this.SERVICE = res); 
  }

}
