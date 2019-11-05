import { Component, OnInit, Input } from '@angular/core';
import { HeroApp } from '../hero';
import { HEROES } from '../mock-heroes';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../employee';

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
  public person = {
    "firstName": "Tharini",
    "lastName": "Govind"
  }
  public date = new Date();
  public employees: IEmployee[];
  public errorMsg;
  constructor(private _employeeService: EmployeeService) { }
  //for dependency injection
  // ngOnInit() {
  //   this.nameFunc();
  //   this.employees = this._employeeService.getEmployees();
  // }

  // for fetch data to the http
  ngOnInit() {
    this.nameFunc();
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data,
        error => {
          // console.log("error");
          this.errorMsg = error
        })
  }

  nameFunc() {
    this.bigil = "thalapathy vijay";
  }

}
