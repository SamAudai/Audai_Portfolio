import {
  AfterViewChecked, 
  AfterViewInit, 
  Component, 
  ElementRef,
  EventEmitter,
  HostListener, Input, OnChanges, OnInit, Output, QueryList, Renderer2, SimpleChanges, ViewChildren
} from '@angular/core';
//import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements AfterViewInit, OnInit, AfterViewChecked, OnChanges {

  @ViewChildren('list') list!: QueryList<ElementRef>;

  source: string = "";
  language: string = "";
  mode: string = "";
  
  isMenuOpen: boolean = false;
  isSticky: boolean = false;

  private _isChange: boolean = false;

  @Input('source') $source!: string;  

  //مر اقبة التغييرات التي تحدث على القيم باستخدام Set/Get:
  get icon(): boolean {
    return this._isChange
  }
  @Input() set icon(value: boolean) {
    this._isChange = value;
    this.mode = value?'Dark Mode':'Light Mode';                   
  } 

  @Output() newStatus: EventEmitter<any> = new EventEmitter<any>();

  constructor(public languageService: LanguageService, 
              private renderer2: Renderer2) { }

  ngOnInit(): void {

    this.language = localStorage.getItem('lang') || 'en';
    if (this.language === 'ar') {
      this.renderer2.addClass(document.body, 'direction');          
    }

    this.source = localStorage.getItem('icon') || '/assets/image/sun.png'
    if (localStorage.getItem('theme') === 'light') {
      this.renderer2.addClass(document.body, 'light');     
            
    }else{
      this.renderer2.addClass(document.body, 'body');      
    }
    
  }

  ngAfterViewInit(): void {
    this.list.forEach(element => {
      this.renderer2.setStyle(element.nativeElement, 'color', '#ED0A3F');
    });

    this.list.changes.subscribe(Qlist => {
      console.log(Qlist);
      console.log('Test Li Length: ' + Qlist.length);
      console.log('Test Li First Item : ' +
        this.renderer2.selectRootElement(
          Qlist.first.nativeElement, true).textContent
      );
      console.log('Test Li Last Item : ' +
        this.renderer2.selectRootElement(
          Qlist.last.nativeElement, true).textContent
      );
    })
  }

  ngAfterViewChecked(): void {
    /*  console.log(this.list);
     console.log('Test Li Length: ' + this.list.length);
     console.log('Test Li First Item : ' +
       this.renderer2.selectRootElement(
         this.list.first.nativeElement, true).textContent
     );
     console.log('Test Li Last Item : ' +
     this.renderer2.selectRootElement(
     this.list.last.nativeElement, true).textContent
     ); */

  }

  // اقبة التغييرات التي تحدث على القيم باستخدام ngOnChanges:
  ngOnChanges(changes: SimpleChanges): void {
    //console.log(changes);
    for (const propertyName in changes) {
      if (changes.hasOwnProperty(propertyName) && !changes[propertyName].firstChange) {
        switch (propertyName) {
          case '$source': {
            console.log('name property changed');
            break;
          }
          case 'icon': {
            console.log(`icon property changed ${this.mode}`);
            break;
          }
        }
      }
    }

  }
  
  
  //Called for change theme mode (dark/light)
  toggleLightTheme() {    
    if (document.body.classList.contains('light')){
      document.body.classList.remove('light');
      localStorage.setItem('theme','body');
      localStorage.setItem('icon','/assets/image/sun.png')
      
    } else {
      document.body.classList.add('light');
      localStorage.setItem('theme','light');
      localStorage.setItem('icon', '/assets/image/moon.png')
    }
    this.source  = localStorage.getItem('icon') as string;
    
    this.newStatus.emit(!this._isChange);
  }       
  

  @HostListener('window:scroll') onWindowScroll() {
    this.isSticky = (window.scrollY > 0);    
  }
  

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
