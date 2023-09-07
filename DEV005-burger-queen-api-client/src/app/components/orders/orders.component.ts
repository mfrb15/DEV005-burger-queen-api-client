import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductInOrder } from 'src/app/models/products.interface';
import { OrderProductService } from 'src/app/services/orderProduct.service';
import { UserService } from 'src/app/services/users.service';
import { Order } from 'src/app/models/products.interface';
// paso 2 el... el paso 3 esta en cook.component

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  @Input() clientName = '';
  @Input() productOrderList: ProductInOrder[] = [];
  @Input() tableNumber = '';
  @Output() orderCreated = new EventEmitter<Order>(); // Evento para notificar la creación de una orden

  constructor(private ordersService: OrderProductService, private userService: UserService) { }


  createOrder() {
    const userId = this.getUserId();
    console.log(userId, 'SOY USER ID')
    console.log('Haciendo click a enviar orden')
    this.clearInputs();
    // Crear la orden con los datos actuales
    const newOrder: Order = {
      userId: Number(userId),
      client: this.clientName, // Usar el nombre del cliente actual
      products: this.productOrderList,
      status: 'pending',
      dateEntry: new Date(),
    };
    this.ordersService.postOrder(newOrder).subscribe((data) => {
      console.log(data, 'soy ese console');
      this.orderCreated.emit(data);
    })
  }
  clearInputs() {
    this.productOrderList = [];
  }


  onProductClicked(productInOrder: ProductInOrder) {
    const index = this.productOrderList.findIndex(item => item.product.name === productInOrder.product.name);
    if (index !== -1) {
      this.productOrderList[index].qty = (this.productOrderList[index].qty + 1)
    } else {
      this.productOrderList.push({
        qty: 1,
        product: {
          id: productInOrder.product.id,
          name: productInOrder.product.name,
          price: productInOrder.product.price,
          image: productInOrder.product.image,
          type: productInOrder.product.type,
          dateEntry: productInOrder.product.dateEntry,
        }
      })
    }
  }

  upDateTableInOrder(tableNumber: string) {
    this.tableNumber = tableNumber;
  }

  getUserId() {
   return this.userService.getId();
  }
}





