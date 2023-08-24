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

  productList: Array<Product> = [];

  showProducts() {
    this.service.getProducts().subscribe((data) => {
      console.log(data);
      this.productList = [data];
    })

  }

}
