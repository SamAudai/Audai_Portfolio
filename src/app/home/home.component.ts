import { Component, OnInit } from '@angular/core';
import { flyInOut } from '../animations/app-animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },  
  animations: [flyInOut()]
})

export class HomeComponent implements OnInit {

  source: string[] = ['Software Engineer', 'Full Stack Web Developer', 'Desktop Application Developer'];
  sourceIndex: number = 0;
  sourceCurrent: string = '';

  isText: boolean = false;

  constructor() { }

  ngOnInit(): void {

   this.setSkill();
    setInterval(() => {
      this.changeSkill();
    }, 4000);

  }

  setSkill(): void {
    this.sourceCurrent = this.source[this.sourceIndex];
  }

  changeSkill(): void {
    this.sourceIndex++;
    if (this.sourceIndex >= this.source.length) {
      this.sourceIndex = 0;
    }
    this.setSkill();
    
  } 

}


