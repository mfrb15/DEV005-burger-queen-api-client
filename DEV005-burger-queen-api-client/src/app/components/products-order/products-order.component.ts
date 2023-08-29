import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/products.interface';
import { OrderProductService } from 'src/app/services/orderProduct.service';

@Component({
  selector: 'app-products-order',
  templateUrl: './products-order.component.html',
  styleUrls: ['./products-order.component.css']
})
export class ProductsOrderComponent {
  constructor(private service: OrderProductService) { }
@Input() productList: Product[] = [];
createOrder() {
  this.service.postOrder().subscribe((data) => {
    console.log(data);
  })
}

clearOrder() {
  this.productList = [];
}
// hacer una funcion que conecte el boton con este componente
}

