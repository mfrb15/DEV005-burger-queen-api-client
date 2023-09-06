import { Injectable } from '@angular/core';
import { Order } from '../models/products.interface';
// Paso 1.... el paso dos esta en Orders.components
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private orders: Order[] = [];

// Definimos la funcion para agregar la orden
  addOrder(order: Order) {
    this.orders.push(order);
    console.log(this.orders, 'ORDEN AGREGADA')
  }
 // Obtener la lista de ordenes pendientes
  getOrders() {

    return this.orders;

  }
}


  // // creamos una funcion para agregar una orden
  // addOrder(order: Order) {
  //   this.orders.push(order);
  //   console.log('ORDEN AGREGADA', order)
  // }
  // // Creamos otra funcion para obtener la lista de ordenes pendientes
  // getOrders() {
  //   return this.orders;
  // }

