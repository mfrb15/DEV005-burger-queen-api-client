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

  ngOnInit(): void {
    this.showLunchProducts();
  }

  showLunchProducts() {
    this.service.getProducts().subscribe((data) => {
      this.productList = data.filter(product => product.type === 'Almuerzo');
    })
  }

}
