import { Injectable } from '@angular/core';
import { LoginI } from '../models/login.interface';
import { ResponseI } from '../models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url: string = "http://localhost:8080/";
  constructor(private http: HttpClient) { }

  loginByEmail(form: LoginI): Observable<ResponseI> {

    return direccion = this.url +
  }
}
