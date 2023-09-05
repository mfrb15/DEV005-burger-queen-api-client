import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ProductInOrder } from 'src/app/models/products.interface';
import { OrderProductService } from 'src/app/services/orderProduct.service';
import { Order } from 'src/app/models/products.interface';
import { OrdersService } from 'src/app/services/orders.service';
import { CommunicationServiceService } from 'src/app/services/communication-service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnChanges {
  @Input() clientName = '';
  @Input() productOrderList: ProductInOrder[] = [];
  @Input() tableNumber = '';
  @Output() orderCreated = new EventEmitter<Order>(); // Evento para notificar la creación de una orden

  constructor(private service: OrderProductService, private ordersService: OrdersService, private communicationService: CommunicationServiceService) { }

  ngOnChanges(): void {
    console.log(this.productOrderList);
  }

  createOrder() {
    // Crear la orden con los datos actuales
    const newOrder: Order = {
      userId: 1,
      client: this.clientName, // Usar el nombre del cliente actual
      products: this.productOrderList,
      status: 'Pendiente',
      dateEntry: '2022-09-05 10:00:00',
    };

    // Agregar la orden al servicio de órdenes
    this.ordersService.addOrder(newOrder);

    // Notificar al componente padre (waiter) que se ha creado una orden
    this.orderCreated.emit(newOrder);

    // Limpiar el formulario para ingresar otra orden
    this.clearForm();
    console.log(newOrder, 'soy la orden enviada')
  }
  // Función para limpiar el formulario
  clearForm() {

    // Obtener las ordenes actualizadas y enviarlas a traves del servicio de comunicacion
    const updatedOrdes = this.ordersService.getOrders();
    this.communicationService.updateOrders(updatedOrdes);

      // Limpiar el formulario para ingresar otra orden
    this.clientName = '';
    this.productOrderList = [];
    this.tableNumber = '';

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




