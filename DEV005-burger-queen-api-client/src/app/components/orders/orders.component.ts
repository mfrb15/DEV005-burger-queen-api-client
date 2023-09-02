import { Component, Input, OnChanges } from '@angular/core';
import { Product } from 'src/app/models/products.interface';
import { OrderProductService } from 'src/app/services/orderProduct.service';
// import { Order } from 'src/app/models/products.interface';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnChanges {
  @Input() productOrderList: Product[] = [];
  constructor(private service: OrderProductService) { }

  ngOnChanges(): void {
    console.log(this.productOrderList);
  }
  // selectedProduct: Product[] = [];

// productOrderList: Product [] = [];
  createOrder() {
    this.service.postOrder().subscribe((data) => {
      console.log(data);
    })
  }

  onProductAdded(product: Product) {
    console.log(product, 'llego la info al padre')
    this.productOrderList.push(product);
  }
}
