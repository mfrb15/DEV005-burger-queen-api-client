import { Component } from '@angular/core';
import { ProductInOrder, tabButton, Order } from 'src/app/models/products.interface';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent {
  productOrderList: ProductInOrder[] = [];
  activeTab = 'Desayuno';
  tabMenu: tabButton[] = [
    { name: 'Desayuno', label: 'Desayunos' },
    { name: 'Almuerzo', label: 'Almuerzos/Cenas' }
  ];
  clientName = '';
  tableNumber = '';
  orders: Order[] = [];

  onProductClicked(productInOrder: ProductInOrder) {
    console.log('onProductClicked se está ejecutando', productInOrder);
    const index = this.productOrderList.findIndex(item => item.product.name === productInOrder.product.name);
    if (index !== -1) {
      this.productOrderList[index].qty = (this.productOrderList[index].qty + 1);
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
      });
      console.log('productOrderList después de la actualización', this.productOrderList);
    }
  }

  onTabChange(tabName: string) {
    this.activeTab = tabName;
  }

  OnUpdateName(name: string) {
    // console.log(this.clientName = name, 'Llego el nombre')
    this.clientName = name;
  }
  onUpDateTableInOrder(tableNumber: string) {
    // console.log(this.tableNumber = tableNumber, 'llego el numero');
    this.tableNumber = tableNumber;
  }

  onOrderCreated(order: Order) {
    this.orders.push(order);
    this.clientName = '';
    this.tableNumber = '';
    this.productOrderList = [];
  }

}
