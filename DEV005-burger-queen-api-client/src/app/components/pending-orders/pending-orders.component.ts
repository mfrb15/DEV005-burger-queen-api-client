import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { Order } from 'src/app/models/products.interface';
import { OrderProductService } from 'src/app/services/orderProduct.service';


@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.css']
})
export class PendingOrdersComponent implements OnInit {
  pendingOrders: Order[] = [];

  constructor(private ordersService: OrderProductService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.addNewOrders();
    this.updateOrdersView();
  }

  addNewOrders() {
    this.ordersService.getOrders().subscribe((data) => {
      this.pendingOrders = data;
      this.cdr.markForCheck();
    })
  }

  updateOrdersView(): void {
    this.addNewOrders();
    this.pendingOrders = this.pendingOrders.slice().sort((a, b) => {
      return new Date(b.dateEntry).getTime() - new Date(a.dateEntry).getTime();
    });
  }

}
