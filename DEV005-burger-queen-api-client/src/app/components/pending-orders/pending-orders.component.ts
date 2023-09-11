import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter} from '@angular/core';
import { ResponseOrder } from 'src/app/models/products.interface';
import { OrderProductService } from 'src/app/services/orderProduct.service';


@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.css']
})
export class PendingOrdersComponent implements OnInit {
  pendingOrders: ResponseOrder[] = [];
  @Output() orderReady = new EventEmitter<ResponseOrder>();

  constructor(private ordersService: OrderProductService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.addNewOrders();
    this.updateOrdersView();
  }

  addNewOrders() {
    this.ordersService.getOrders().subscribe((data) => {
      console.log(data);
      this.pendingOrders = data.filter(order => order.status === 'pending');
      this.cdr.markForCheck();
    });
  }

  updateOrdersView(): void {
    this.addNewOrders();
    this.pendingOrders = this.pendingOrders.slice().sort((a, b) => {
      return new Date(b.dateEntry).getTime() - new Date(a.dateEntry).getTime();
    });
  }

  markAsReady(order: ResponseOrder) {
    console.log('Botón marcar pedido listo', order);
    const index = this.pendingOrders.findIndex(item => item.id === order.id);
    if (index !== -1) {
      // Elimina el elemento del array usando splice()
      this.pendingOrders.splice(index, 1);
      order.status = 'ready';
      this.orderReady.emit(order);
    }
  }

}
