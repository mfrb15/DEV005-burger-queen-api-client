import { Injectable } from '@angular/core';
import { Credentials, LoginResponse } from '../models/login.interface';
import { HttpClient, } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private apiUrl = 'http://127.0.0.1:8080/';
  token = '';
  constructor(private http: HttpClient) { }

  // los otros métodos que tendríamos que tener aquí son:
  // getToken()
  getToken(): string | null  {
    return localStorage.getItem('accesToken');
  }

  // getRole()
  getRole(): string | null  {
    return localStorage.getItem('role');
  }
  // Se pasa la función para hacer login que recibe un formulario de tipo loginI (interfaz) y va retornar un objeto observable de tipo responseI
  // loginByEmail(form: Credentials): Observable<LoginResponse> {
  //   // Variable con la dirección de dónde vamos a postear el formulario
  //   const direction = this.url + "login"
  //   return this.http.post<LoginResponse>(direction, form)
  // }
  loginByEmail(credentials: Credentials): Observable<LoginResponse> {
    return this.http.post(`${this.apiUrl}login`, credentials).pipe(
      map((resp: any) => {
        return resp;
      }),
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  // aqui iria la función obtener productos.

}
