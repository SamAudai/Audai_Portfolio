import { Component, OnInit } from '@angular/core';
import { Iportfolio } from "src/app/models/portfolio";
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-item-portfolio',
  templateUrl: './item-portfolio.component.html',
  styleUrls: ['./item-portfolio.component.css']
})

export class ItemPortfolioComponent implements OnInit{

  PORTFOLIO!: Array<Iportfolio>;

  constructor(private service: PortfolioService){}

  ngOnInit(): void {
    //this.service.getAllPortfolio().then(res=> this.PORTFOLIO = res);
    this.service.getAllPortfolio().subscribe(res=>this.PORTFOLIO=res);  
  }

}
