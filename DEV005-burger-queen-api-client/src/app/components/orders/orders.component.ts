import { Component } from '@angular/core';
import { Product } from 'src/app/models/products.interface';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  constructor(private service: ServicesService) {}

  list: Array<Product> = [];

  createOrder() {
    this.service.getOrders().subscribe((data) => {
      console.log(data);
      this.list = [data];
    })

  }

}
