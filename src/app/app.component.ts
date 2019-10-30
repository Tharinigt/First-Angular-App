import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`div{ color:red;}`]
})
export class AppComponent {
  // You created the initial application structure using the Angular CLI
  title = 'Log in';
  name = 'Tharaa';
  a = 5;
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
