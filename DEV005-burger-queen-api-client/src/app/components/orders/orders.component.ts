import { Component } from '@angular/core';
import { OrderProductService } from 'src/app/services/orderProduct.service';
// import { Order } from 'src/app/models/products.interface';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  constructor(private service: OrderProductService) { }
  createOrder() {
    this.service.postOrder().subscribe((data) => {
      console.log(data);
    })
  }
}
