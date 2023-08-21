import { Component } from '@angular/core';
import { flyInOut } from 'src/app/animations/app-animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },  
  animations: [flyInOut()]
})
export class AboutComponent {

}
