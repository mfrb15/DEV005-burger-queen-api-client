import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Order } from '../models/products.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderProductService {
  private apiUrl = 'http://127.0.0.1:8080/';

  constructor(private http: HttpClient) { }


  // Get order

  postOrder(): Observable<Order> {
    const direction = this.apiUrl + 'orders';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('accesToken')}`,
    });
    console.log(this.http.get<Order>(direction, {headers: headers}))
    return this.http.post<Order>(direction, {headers: headers})
  }
}
