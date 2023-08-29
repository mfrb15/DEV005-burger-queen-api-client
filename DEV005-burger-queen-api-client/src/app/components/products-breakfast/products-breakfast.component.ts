import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/models/products.interface';

@Component({
  selector: 'app-products-breakfast',
  templateUrl: './products-breakfast.component.html',
  styleUrls: ['./products-breakfast.component.css']
})
export class ProductsBreakfastComponent {
  @Output() productAdded = new EventEmitter<Product>();

  productList: Product[] = [];
  addToOrder(product: Product) {
    this.productAdded.emit(product);
  }
}
