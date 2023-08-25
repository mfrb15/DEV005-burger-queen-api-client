import { Component } from '@angular/core';
import { Product } from 'src/app/models/products.interface';
import { ServicesService } from 'src/app/services/services.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-products-lunch',
  templateUrl: './products-lunch.component.html',
  styleUrls: ['./products-lunch.component.css']
})
export class ProductsLunchComponent implements OnInit {
  constructor(private service: ServicesService) {}

  productList: Product[] = [];

  // Se agrega la función dentro de ngOnInit para que nada más ingresar a la vista, se muestren los productos.
  ngOnInit(): void {
    this.showLunchProducts();
  }

  showByName(product: Product, category: string): boolean {
    return product.name.includes(category);
  }

  showLunchProducts() {
    this.service.getProducts().subscribe((data) => {
      // Para que sólo se muestre el almuerzo, filtro por type la data
      this.productList = data.filter(product => product.type === 'Almuerzo');
    })
  }

}
