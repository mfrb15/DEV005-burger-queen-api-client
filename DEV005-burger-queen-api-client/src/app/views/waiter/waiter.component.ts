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
  activeTab = 'breakfast';
  tabMenu: tabButton[] = [
    { name: 'breakfast', label: 'Desayunos' },
    { name: 'lunch-dinner', label: 'Almuerzos/Cenas' }
  ];

  constructor(private service: OrderProductService) {} // Inyecta el servicio

  onProductAdded(product: Product) {
    this.selectedProduct.push(product);
    console.log( product, 'ahora si')
    // this.createOrder(); //FALTABA LLAMAR A LA FUNCION DESDE WAITER COMPONENT Y NO DESDE EL BUTTON
  }

  createOrder() {
    // Llama al método postOrder del servicio para crear la orden con los productos agregados
    this.service.postOrder().subscribe((data) => {
      console.log(data);
    });
  }

  onTabChange(tabName: string) {
    this.activeTab = tabName;
  }
}


// import { Component } from '@angular/core';
// import { tabButton } from 'src/app/models/products.interface';


// @Component({
//   selector: 'app-waiter',
//   templateUrl: './waiter.component.html',
//   styleUrls: ['./waiter.component.css']
// })
// export class WaiterComponent {

//   activeTab = 'breakfast';
//   tabMenu: tabButton[] = [ // Array de objetos que contiene la info de las pestanas
//     { name: 'breakfast', label: 'Desayunos' },
//     { name: 'lunch-dinner', label: 'Almuerzos/Cenas' }
//   ];

//   onTabChange(tabName: string) {
//     this.activeTab = tabName;
//   }
// }




