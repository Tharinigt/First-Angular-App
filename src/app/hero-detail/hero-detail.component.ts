import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeroApp } from '../hero';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-hero-detail',
  template: `
  <h2>{{"Hello" + parentData}}</h2>
  <button (click)="childToParent()">ChildToParent</button><br>
  <h3>Employees Details-Dependency Injection</h3>
  <ul *ngFor="let e of employees">
  <li >{{e.id}}.{{e.name}}-{{e.age}}</li>
  <span>ERROR</span>
  <h3>{{errorMsg}}</h3>
</ul>
  `,
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: HeroApp;

  // ParentToChild Component Interaction
  @Input() public parentData;
  // Or @Input('parentData') public name;

  // ChildToParent Component Interaction
  @Output() public childData = new EventEmitter();
  // Dependency Injection & Service
  public employees = [];
  public errorMsg;
  constructor(private _employeeService: EmployeeService) { }
  //for dependency injection
  // ngOnInit() {
  //   this.employees = this._employeeService.getEmployees();
  // }

  // for fetch data to the http
  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data,
        error => this.errorMsg = error);
  }

  childToParent() {
    this.childData.emit('Data passed from Child to Parent');
  }

}
