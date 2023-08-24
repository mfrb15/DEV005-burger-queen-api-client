import { Component } from '@angular/core';
import { Product } from 'src/app/models/products.interface';
import { ServicesService } from 'src/app/services/services.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-products-breakfast',
  templateUrl: './products-breakfast.component.html',
  styleUrls: ['./products-breakfast.component.css']
})
export class ProductsBreakfastComponent implements OnInit{
  constructor(private service: ServicesService) {}

  productList: Product[] = [];

  ngOnInit(): void {
    this.showBreakfastProducts();
  }

  showBreakfastProducts() {
    this.service.getProducts().subscribe((data) => {
      console.log(data);
      // Para que sólo se muestre el desayuno, filtro por type la data.
      this.productList = data.filter(product => product.type === 'Desayuno');
    })
  }
}
