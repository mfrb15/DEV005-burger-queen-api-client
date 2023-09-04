import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/products.interface';
import { OrderProductService } from 'src/app/services/orderProduct.service';

@Component({
  selector: 'app-products-order',
  templateUrl: './products-order.component.html',
  styleUrls: ['./products-order.component.css']
})
export class ProductsOrderComponent {
  constructor(private service: OrderProductService) { }
  @Output() productAdded = new EventEmitter<Product>();
  @Input() products: Product[] = [];

  addToOrder(product: Product) {
    console.log(product);
    this.productAdded.emit(product);
  }

  removeProduct(index: number) {
    this.products.splice(index, 1);
  }

  createOrder() {
    this.service.postOrder().subscribe((data) => {
      console.log(data);
    })
  }

  clearOrder() {
    this.products = [];
  }
  // hacer una funcion que conecte el boton con este componente
}

