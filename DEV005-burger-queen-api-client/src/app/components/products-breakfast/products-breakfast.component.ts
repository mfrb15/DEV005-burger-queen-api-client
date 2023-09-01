import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Product } from 'src/app/models/products.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-breakfast',
  templateUrl: './products-breakfast.component.html',
  styleUrls: ['./products-breakfast.component.css']
})
export class ProductsBreakfastComponent implements OnInit {
  constructor(private service: ProductsService) { }
  @Output() productAdded = new EventEmitter<Product>();
  @Input() activeTab = '';

  productList: Product[] = [];

  ngOnInit(): void {
    this.showBreakfastProducts();
  }

  showBreakfastProducts() {
    this.service.getProducts().subscribe((data) => {
      console.log(data);
      // Para que sólo se muestre el desayuno, filtro por type la data.
      this.productList = data.filter(product => product.type === this.activeTab)
      console.log(this.productList.filter(product => product.type === this.activeTab), this.activeTab);
    })
  }

  addToOrder(product: Product){
    console.log(product, 'Funciona el boton')
    this.productAdded.emit(product);
  }
}
