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
  public userName = "";
  public greet = "";
  displayName = false;
  public color = "orange";
  public list = ["Africa", "America", "Europe", "Australia", "Asia"];
  public message = "";
  constructor() { }
  clicked(value) {
    this.onCallDisplay(value);
  }
  onCallDisplay(value) {
    console.log("Hi there")
    this.greet = "Good morning"
    console.log("name", value)
  }
  greetUser() {
    return "Hello " + this.name;
  }
}
