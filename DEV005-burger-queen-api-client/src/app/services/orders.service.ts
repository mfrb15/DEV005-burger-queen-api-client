import { Injectable } from '@angular/core';
import { Order } from '../models/products.interface';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private orders: Order[] = [];

  // creamos una funcion para agregar una orden
  addOrder(order: Order) {
    this.orders.push(order);
    console.log('ORDEN AGREGADA', order)
  }
  // Creamos otra funcion para obtener la lista de ordenes pendientes
  getOrders() {
    return this.orders;
  }
}
