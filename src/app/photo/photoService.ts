import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
//import {NgxPrintElementService} from "ngx-print-element";
import { FormBuilder} from '@angular/forms';
import { Photo } from './photo';


@Injectable({
  providedIn: 'root'
})
export class photoService {

  private baseURL = "http://localhost:9090/photo";

  constructor(private httpClient: HttpClient) { }

  getPhotosList(): Observable<Photo[]>{
    return this.httpClient.get<Photo[]>(`${this.baseURL}/all`);
  }

  getPhotoById(id: number): Observable<Photo>{
    return this.httpClient.get<Photo>(`${this.baseURL}/${id}`);
  }

  getByResto(resto: number): Observable<Photo[]>{
    return this.httpClient.get<Photo[]>(`${this.baseURL}/byresto/${resto}`);
  } 
}
