import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // You created the initial application structure using the Angular CLI
  public title = 'Log in';
  public name = 'Tharaa';
  public a = 5;
  public data = "text-failure";
  public hasError = false
  public important = true
  public messageClass = {
    "text-success": !this.hasError,
    "text-failure": this.hasError,
    "text-important": this.important
  }
  constructor() { }
  clicked() {
    this.onCallDisplay();
  }
  onCallDisplay() {
    console.log("Hi there")
  }
  greetUser() {
    return "Hello " + this.name;
  }
}
