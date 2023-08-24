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

  productList: Array<Product> = [

  ];

  ngOnInit(): void {
    this.showProducts();
  }

  showProducts() {
    this.service.getProducts().subscribe((data) => {
      this.productList = [data];
      console.log(this.productList);
    })

  }
}
