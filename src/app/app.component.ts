import { Component, OnInit } from '@angular/core';
import { flyInOut, expand } from './animations/app-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],    
  animations: [flyInOut(), expand()]
})

export class AppComponent implements OnInit {

  name = 'Audai Portfolio';
  source = "../../assets/image/logo.svg";
  isChange!: boolean ;
  


  constructor() { }

  ngOnInit(): void {
      
  }

  changeStatus(status: any) {
    this.isChange = status;   
  }

}