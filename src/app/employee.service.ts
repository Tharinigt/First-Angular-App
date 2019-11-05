import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { throwError, Observable } from 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw'
// import 'rxjs/add/operator/map'
// import 'rxjs/Rx';
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // HTTP and Obervables
  //constructor() { }
  // getEmployee() {
  //   return [
  //     { "id": 1, "name": "aaaa", "age": 34, },
  //     { "id": 2, "name": "bbbb", "age": 56, },
  //     { "id": 3, "name": "cccc", "age": 67, },
  //     { "id": 4, "name": "dddd", "age": 34, }
  //   ]
  // }

  // Fetch data using Http
  private _url: string = "/assets/data/employees.json";
  constructor(private http: HttpClient) { }
  getEmployees(): Observable<any> {
    console.log("vfhb",this.http.get(this._url))
    return this.http.get<IEmployee[]>(this._url).pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error')
  }
} 
