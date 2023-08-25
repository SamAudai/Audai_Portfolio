import { Component, OnInit } from '@angular/core';
import { flyInOut } from 'src/app/animations/app-animations';


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

  constructor(){}

  ngOnInit(): void {
     
  }

}
