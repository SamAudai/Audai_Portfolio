import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { SkillComponent } from './skill/skill.component';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})

export class TextComponent implements OnInit { 
  
  @ViewChild(SkillComponent) $skill!:SkillComponent;
  @ViewChildren('skill') $skills!:QueryList<SkillComponent>;

  constructor(){}

  ngOnInit(): void {
         
  }

}