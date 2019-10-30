import { Component, OnInit, Input } from '@angular/core';
import { HeroApp } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heros-component',
  templateUrl: './heros-component.component.html',
  styleUrls: ['./heros-component.component.scss']
})

export class HerosComponentComponent implements OnInit {
  heroes = HEROES;
  bigil: string;
  hero: HeroApp = {
    id: 23,
    name: "Tharini"
  };

  selectedHero: HeroApp;
  onSelect(hero: HeroApp): void {
    this.selectedHero = hero;
  }
  
  constructor() { }

  ngOnInit() {
    this.nameFunc();
  }

  nameFunc() {
    this.bigil = "Vijay";
  }

}
