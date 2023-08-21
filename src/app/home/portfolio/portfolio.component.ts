import { Component, OnInit } from '@angular/core';
import { flyInOut } from 'src/app/animations/app-animations';
import { Iportfolio, portFolio } from "../../models/portfolio";
import { PortfolioService } from 'src/app/services/portfolio.service';

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

  PORTFOLIO!: Array<Iportfolio>;

  constructor(private service: PortfolioService){}
  
  ngOnInit(): void {
    //this.service.getAllPortfolio().then(res=> this.PORTFOLIO = res);
    this.service.getAllPortfolio().subscribe(res=>this.PORTFOLIO=res);     
  }

}
