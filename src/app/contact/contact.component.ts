import { Component, ViewChild, ElementRef, AfterViewInit, OnInit, Renderer2 } from '@angular/core';
import { flyInOut } from 'src/app/animations/app-animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },  
  animations: [flyInOut()]
})

export class ContactComponent implements AfterViewInit, OnInit {

  private $textValue:string = "";
  //textValue:string = ""
  nplaceHolder: string  = "Your Name";
  eplaceHolder: string  = "Your Email";
  tplaceHolder: string = "Your Message";
  submit : string = "Submit";

  @ViewChild('name') name!: ElementRef;

  constructor(private renderer2:Renderer2){}

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {    
    /* setTimeout(()=>{
        this.email.nativeElement.focus();
    }) */

    //this.renderer2.selectRootElement(this.email.nativeElement).focus();
  }

  get textValue():string{
    return this.$textValue ;
  }
  set textValue(value:string){
    this.$textValue = value;
    if(value === "Audai Alsharani"){
      alert(`Welcome ${this.$textValue}`);
    }
  }

 /*  showMsg(event:any){
    this.textValue = event;
    if(this.textValue === "audaisam5@gmail.com"){
      alert(`Welcome ${this.textValue}`);
    }
  } */

}

