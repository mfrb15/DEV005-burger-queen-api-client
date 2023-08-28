import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services/users.service';
// import { Order } from 'src/app/models/products.interface';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  constructor(private service: ServicesService) { }
  createOrder() {
    this.service.postOrder().subscribe((data) => {
      console.log(data);
    })
  }
}
