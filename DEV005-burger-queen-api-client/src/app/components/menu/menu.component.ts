import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  constructor(private service: ProductsService) { }
  productList: Product[] = [];

  @Output() productAdded = new EventEmitter<Product>();

  ngOnInit(): void {
    this.showBreakfastProducts();
  }

  showBreakfastProducts() {
    this.service.getProducts().subscribe((data) => {
      console.log(this.productList, 'holaaaaaaaaaaaaaaa')
      console.log(data);
      // Para que sólo se muestre el desayuno, filtro por type la data.
      this.productList = data;
    })
  }

  addToOrder(product: Product) {
    console.log(product, 'Funciona el boton')
    this.productAdded.emit(product);
  }
}
