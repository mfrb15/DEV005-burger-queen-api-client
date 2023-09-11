import { Component } from '@angular/core';
import { Order } from 'src/app/models/products.interface';
import { OrderProductService } from 'src/app/services/orderProduct.service';
// Paso 3.. el paso 4 esta en WAITER.HTML
@Component({
  selector: 'app-cook',
  templateUrl: './cook.component.html',
  styleUrls: ['./cook.component.css']
})
export class CookComponent {
  readyOrders: Order[] = [];

  constructor(private ordersService: OrderProductService) { }

  onOrdersReady(order: Order) {
    this.readyOrders.push(order);
  }

}
