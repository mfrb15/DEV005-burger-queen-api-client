import { Component } from '@angular/core';
import { Product } from 'src/app/models/products.interface';
import { ProductsService } from 'src/app/services/products.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-products-breakfast',
  templateUrl: './products-breakfast.component.html',
  styleUrls: ['./products-breakfast.component.css']
})
export class ProductsBreakfastComponent implements OnInit{
  constructor(private service: ProductsService) {}

  productList: Product[] = [];

  ngOnInit(): void {
    this.showBreakfastProducts();
  }

  showByName(product: Product, name: string): boolean {
    return product.name.includes(name);
  }


  showBreakfastProducts() {
    this.service.getProducts().subscribe((data) => {
      console.log(data);
      // Para que sólo se muestre el desayuno, filtro por type la data.
      this.productList = data.filter(product => product.type === 'Desayuno');
    })
  }

}
