import { Component} from '@angular/core';
import { Order } from 'src/app/models/products.interface';
import { OrdersService } from 'src/app/services/orders.service';
// Paso 3.. el paso 4 esta en WAITER.HTML
@Component({
  selector: 'app-cook',
  templateUrl: './cook.component.html',
  styleUrls: ['./cook.component.css']
})
export class CookComponent  {
  orders: Order[] = [];

  constructor(private ordersService: OrdersService) {
    // Obtener la lista de ordenes pendientes
    this.orders = this.ordersService.getOrders();
    console.log(this.orders, 'Soy cook component');
  }
  receiveNewOrder(order: Order){
    this.orders.push(order);
  }

}

