import { Injectable } from '@angular/core';
import { LoginI } from '../models/login.interface';
import { ResponseI } from '../models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private url = 'http://127.0.0.1:8080/';
  constructor(private http: HttpClient) { }
  // Se pasa la función para hacer login que recibe un formulario de tipo loginI (interfaz) y va retornar un objeto observable de tipo responseI
  loginByEmail(form: LoginI): Observable<ResponseI> {
    // Variable con la dirección de dónde vamos a postear el formulario
    const direction = this.url + "login"
    return this.http.post<ResponseI>(direction, form)
  }
}
