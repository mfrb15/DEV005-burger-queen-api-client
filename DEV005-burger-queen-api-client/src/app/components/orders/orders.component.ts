import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductInOrder } from 'src/app/models/products.interface';
import { OrderProductService } from 'src/app/services/orderProduct.service';
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

  constructor( private ordersService: OrderProductService) { }

  createOrder() {
    console.log('Haciendo click a enviar orden')
    // [...this.productOrderList], creas una nueva matriz que es una copia de los elementos de this.productOrderList
    // pero independiente de ella. De esta manera, puedes modificar productOrderListCopy sin afectar a this.productOrderList.
    const productOrderListCopy = [...this.productOrderList];
    // Crear la orden con los datos actuales
    const newOrder: Order = {
      userId: 1,
      client: this.clientName, // Usar el nombre del cliente actual
      products: productOrderListCopy,
      status: 'Pendiente',
      dateEntry: '2022-09-05 10:00:00',
    };
    this.ordersService.postOrder(newOrder).subscribe((data) => {
      console.log(data, 'soy ese console');

      this.orderCreated.emit(data);
    })
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
}


  // createOrder() {
  //   this.service.postOrder().subscribe((data) => {
  //     console.log(data);
  //   })




