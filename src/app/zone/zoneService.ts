import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Zone } from './zone';
//import {NgxPrintElementService} from "ngx-print-element";
import { FormBuilder} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class zoneService {

  private baseURL = "http://localhost:9090/zone";

  constructor(private httpClient: HttpClient) { }

  getZoneByVille(villeId: number): Observable<Zone[]>{
    return this.httpClient.get<Zone[]>(`${this.baseURL}/findByIdVille/${villeId}`);
  }

  getZonesList(): Observable<Zone[]>{
    return this.httpClient.get<Zone[]>(`${this.baseURL}/all`);
  }

  getZoneById(id: number): Observable<Zone>{
    return this.httpClient.get<Zone>(`${this.baseURL}/${id}`);
  }
}
