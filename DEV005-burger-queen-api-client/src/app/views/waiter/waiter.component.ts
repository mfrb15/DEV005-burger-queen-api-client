import { Component } from '@angular/core';
import { tabButton } from 'src/app/models/products.interface';
import { Product } from 'src/app/models/products.interface';
import { OrderProductService } from 'src/app/services/orderProduct.service'; // Importa el servicio adecuado

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent {
  selectedProduct: Product[] = [];
  activeTab = 'Almuerzo';
  tabMenu: tabButton[] = [
    { name: 'Desayuno', label: 'Desayunos' },
    { name: 'Almuerzo', label: 'Almuerzos/Cenas' }
  ];

  constructor(private service: OrderProductService) {} // Inyecta el servicio

  onProductAdded(product: Product) {
    this.selectedProduct.push(product);
  }

  createOrder() {
    this.service.postOrder().subscribe((data) => {
      console.log(data);
    });
  }

  onTabChange(tabName: string) {
    this.activeTab = tabName;
  }
}
