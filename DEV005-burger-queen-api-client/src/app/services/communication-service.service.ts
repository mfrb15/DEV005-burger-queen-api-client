import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order } from '../models/products.interface';

@Injectable({
  providedIn: 'root'
})
export class CommunicationServiceService {
private ordersSubject = new BehaviorSubject<Order[]>([]);

// Obserbavle para que otros componentes puedan suscribirse a los cambios en las ordenes
orders$: Observable<Order[]> = this.ordersSubject.asObservable();

// Funcion para actualizar las ordenes

updateOrders(orders: Order[]) {
  this.ordersSubject.next(orders);
}

}
