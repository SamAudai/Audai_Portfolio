import { Component, OnInit } from '@angular/core';
import { Inavitem } from 'src/app/models/navitem';
import { NavitemService } from 'src/app/services/navitem.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isMenuOpen: boolean = false;
  NAVITEM!:Array<Inavitem>

  constructor(private service: NavitemService){}

  ngOnInit(): void {
      this.service.getAllNavItem().subscribe(res=> this.NAVITEM=res)
  }
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
