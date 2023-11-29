import { Component, OnInit } from '@angular/core';
import { ProcessedOrder } from 'src/app/models/products.interface';
import { OrderProductService } from 'src/app/services/orderProduct.service';
@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {

  orders: ProcessedOrder[] = [];

  constructor(private orderService: OrderProductService) {}

  ngOnInit(): void {
    this.getOrderReady();
  }

  getOrderReady() {
    this.orderService.getOrdersReady().subscribe((data) => {
      this.orders = data;
    });
  }

  markOrderDelivered(id: number) {
    const index = this.orders.findIndex(item => item.id === id);
    if(index !== -1)
    this.orderService.markReady(id).subscribe((data) => {
      console.log(data);
    })
  }

  // getOrdersDelivered() {
  //   this.orderService.getOrdersReady().subscribe((data) => {
  //     this.ordersDelivered = data.filter(order => order.status === 'delivered');
  //   })
  // }
}
