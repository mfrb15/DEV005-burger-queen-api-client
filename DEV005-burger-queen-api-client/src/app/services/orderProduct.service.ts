import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { switchMap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../models/products.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderProductService {
  private apiUrl = 'http://127.0.0.1:8080/';
  private pollingInterval = 20000;

  constructor(private http: HttpClient) { }
  // Get order
  postOrder(data: Order): Observable<Order> {
    const direction = this.apiUrl + 'orders';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('accesToken')}`,
    });
    const orderInfo = data;
    const options = { headers: headers };

    return this.http.post<Order>(direction, orderInfo, options)
  }
  // enviar pasar las ordenes a cocina

  getOrders(): Observable<Order[]> {
    const direction = this.apiUrl + 'orders';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('accesToken')}`,
    })
    const options = {headers: headers}

    return timer(0, this.pollingInterval).pipe(
      switchMap(() => this.http.get<Order[]>(direction, options))
    )
  }

}

