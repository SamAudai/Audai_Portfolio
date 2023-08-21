import { Component, OnInit } from '@angular/core';
import { flyInOut } from 'src/app/animations/app-animations';
import { Iservice } from 'src/app/models/service';
import { ServiceService } from 'src/app/services/service-.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },  
  animations: [flyInOut()]
})
export class ServicesComponent implements OnInit {

  SERVICE!:Array<Iservice>;

  constructor(private service_:ServiceService){}

  ngOnInit(): void {
     this.service_.getAllServices().then(res=> this.SERVICE = res); 
  }

}
