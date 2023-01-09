import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
//import {NgxPrintElementService} from "ngx-print-element";
import { FormBuilder} from '@angular/forms';
import { Serie } from './serie';


@Injectable({
  providedIn: 'root'
})
export class serieService {

  private baseURL = "http://localhost:9090/serie";

  constructor(private httpClient: HttpClient) { }

  getSeriesList(): Observable<Serie[]>{
    return this.httpClient.get<Serie[]>(`${this.baseURL}/all`);
  }

  getSerieById(id: number): Observable<Serie>{
    return this.httpClient.get<Serie>(`${this.baseURL}/${id}`);
  }
 
}
