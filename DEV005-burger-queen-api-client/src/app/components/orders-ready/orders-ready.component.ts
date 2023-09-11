import { Component, Input } from '@angular/core';
import { Order } from 'src/app/models/products.interface';

@Component({
  selector: 'app-orders-ready',
  templateUrl: './orders-ready.component.html',
  styleUrls: ['./orders-ready.component.css']
})
export class OrdersReadyComponent {
  @Input() readyOrders: Order[] = [];
}
