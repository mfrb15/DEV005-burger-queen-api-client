import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/products.interface';
import { OrderProductService } from 'src/app/services/orderProduct.service';
// Paso 3.. el paso 4 esta en WAITER.HTML
@Component({
  selector: 'app-cook',
  templateUrl: './cook.component.html',
  styleUrls: ['./cook.component.css']
})
export class CookComponent implements OnInit {
  orders: Order[] = [];

  constructor(private ordersService: OrderProductService) { }
  ngOnInit() {
    this.getOrders();
  }
  getOrders() {
    this.ordersService.getOrders().subscribe((data) => {
      this.orders = data;
      console.log(data, 'SOY LA DATA DE COOK')

    })
  }

}
  // Obtener la lista de ordenes pendientes
  // this.orders = this.ordersService.getOrders();
  // console.log(this.orders, 'Soy cook component');

