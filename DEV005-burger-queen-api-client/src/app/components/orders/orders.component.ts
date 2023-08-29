import { Component } from '@angular/core';
import { Product } from 'src/app/models/products.interface';
import { OrderProductService } from 'src/app/services/orderProduct.service';
// import { Order } from 'src/app/models/products.interface';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  constructor(private service: OrderProductService) { }
  selectedProduct: Product[] = [];

productOrderList: Product [] = [];
  createOrder() {
    this.service.postOrder().subscribe((data) => {
      console.log(data);
    })
  }

  onProductAdded(product: Product) {
    console.log(this.selectedProduct.push(product), 'llego la info al padre', product)
    // this.selectedProduct.push(product);
  }
}
