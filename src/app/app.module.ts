import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// You imported the FormsModule in the AppModule so that Angular would recognize and apply the ngModel directive.
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerosComponentComponent } from './heros-component/heros-component.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './service/data.service';

// You learned about the AppModule.
@NgModule({
  declarations: [
    AppComponent,
    HerosComponentComponent,
    HeroDetailComponent,
    ...routingComponents
  ],
  // You learned the importance of declaring components in the AppModule and appreciated that the CLI declared it for you.
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  // Service Example
  providers: [EmployeeService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
