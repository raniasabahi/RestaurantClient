import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Ville } from './ville';
//mport {NgxPrintElementService} from "ngx-print-element";
import { FormBuilder} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class villeService {

  private baseURL = "http://localhost:9090/ville";

  constructor(private httpClient: HttpClient) { }

  getVillesList(): Observable<Ville[]>{
    return this.httpClient.get<Ville[]>(`${this.baseURL}/all`);
  }

  getVilleById(id: number): Observable<Ville>{
    return this.httpClient.get<Ville>(`${this.baseURL}/${id}`);
  }
}
