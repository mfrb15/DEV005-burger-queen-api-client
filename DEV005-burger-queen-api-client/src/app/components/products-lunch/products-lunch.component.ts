import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/models/products.interface';

@Component({
  selector: 'app-products-lunch',
  templateUrl: './products-lunch.component.html',
  styleUrls: ['./products-lunch.component.css']
})
export class ProductsLunchComponent {
  @Output() productAdded = new EventEmitter<Product>();

  addToOrder(product: Product) {
    this.productAdded.emit(product);
  }
}
