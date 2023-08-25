import { Component, OnInit } from '@angular/core';
import { flyInOut } from 'src/app/animations/app-animations';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },  
  animations: [flyInOut()]
})

export class PortfolioComponent implements OnInit {
  

  constructor(){}
  
  ngOnInit(): void {    
       
  }

}
