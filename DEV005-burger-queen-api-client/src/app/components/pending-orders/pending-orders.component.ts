import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/products.interface';
import { OrderProductService } from 'src/app/services/orderProduct.service';


@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.css']
})
export class PendingOrdersComponent implements OnInit {
  pendingOrders: Order[] = [];

  constructor(private ordersService: OrderProductService) {}


  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.ordersService.getOrders().subscribe((data) => {
      this.pendingOrders = data;
      console.log(data, 'SOY LA DATA DE COOK')
    })
  }

}
