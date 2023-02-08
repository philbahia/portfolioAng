import { Injectable } from '@angular/core';
//Subscribe y recibe resp asincronica
import { Observable } from 'rxjs';
//para hacer peticiones
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  //http se llama alias
  constructor(private http: HttpClient) { }

  getDatos(): Observable<any> {
    return this.http.get('./assets/data/datos.json')
  }
}
