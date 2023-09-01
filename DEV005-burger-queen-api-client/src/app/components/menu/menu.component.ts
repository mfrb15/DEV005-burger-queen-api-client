import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Product } from 'src/app/models/products.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private service: ProductsService) { }
  @Output() productAdded = new EventEmitter<Product>();
  @Input() activeTabInMenu = '';

  productList: Product[] = [];

  ngOnInit(): void {
    this.showProducts();
  }

  showProducts() {
    this.service.getProducts().subscribe((data) => {
      this.productList = data.filter(product => product.type === this.activeTabInMenu);
    })
  }

  addToOrder(product: Product){
    this.productAdded.emit(product);
  }
}
