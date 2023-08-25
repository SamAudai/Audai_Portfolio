import { Component } from '@angular/core';
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

export class HomeComponent {

  image:string = 'assets/image/profile-pic (2).png';

  constructor() { }

}


