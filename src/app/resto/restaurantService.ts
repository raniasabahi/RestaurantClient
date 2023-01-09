import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
//import {NgxPrintElementService} from "ngx-print-element";
import { FormBuilder} from '@angular/forms';
import { Resto } from './restaurant';


@Injectable({
  providedIn: 'root'
})
export class restaurantService {

  private baseURL = "http://localhost:9090/resto";

  constructor(private httpClient: HttpClient) { }

  getRestosList(): Observable<Resto[]>{
    return this.httpClient.get<Resto[]>(`${this.baseURL}/all`);
  }

  getRestoById(id: number): Observable<Resto>{
    return this.httpClient.get<Resto>(`${this.baseURL}/${id}`);
  }

  getByZone(ville: number): Observable<Resto[]>{
    return this.httpClient.get<Resto[]>(`${this.baseURL}/byzone/${ville}`);
  } 
  getBySerie(serie: number): Observable<Resto[]>{
    return this.httpClient.get<Resto[]>(`${this.baseURL}/byserie/${serie}`);
  } 
}

