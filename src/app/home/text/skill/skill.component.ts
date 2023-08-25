import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  source: string[] = ['Software Engineer', 'Full Stack Web Developer', 'Desktop Application Developer'];
  sourceIndex: number = 0;
  sourceCurrent: string = '';
  item:boolean = true;

  constructor(){}

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
