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
      this.pendingOrders = data.filter(order => order.status === 'pending');
      console.log(data);
      this.cdr.markForCheck();
    });
  }

  updateOrdersView(): void {
    this.addNewOrders();
    this.pendingOrders = this.pendingOrders.slice().sort((a, b) => {
      return new Date(b.dateEntry).getTime() - new Date(a.dateEntry).getTime();
    });
  }

  markAsReady(id: number) {
    console.log('Botón marcar pedido listo');
    const index = this.pendingOrders.findIndex(item => item.id === id);
    if (index !== -1) {
      this.ordersService.processOrder(id).subscribe((data) => {
        this.pendingOrders.splice(index, 1);
        this.pendingOrders[index].status = 'ready';
        this.orderReady.emit(data);
      })

    }
  }

}
