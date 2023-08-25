import { Component, OnInit } from '@angular/core';
import { IsubService } from 'src/app/models/subService';
import { SubserviceService } from 'src/app/services/subservice.service';


@Component({
  selector: 'app-subservice',
  templateUrl: './subservice.component.html',
  styleUrls: ['./subservice.component.css']
})
export class SubserviceComponent implements OnInit {

  SUBSERVICE!: Array<IsubService>; 

  constructor(private service: SubserviceService){}

  ngOnInit(): void {
      this.service.getAllSubService().subscribe(res => this.SUBSERVICE = res);
  }

}
