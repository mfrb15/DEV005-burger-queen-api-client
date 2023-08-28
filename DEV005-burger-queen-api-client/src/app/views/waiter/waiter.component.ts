import { Component } from '@angular/core';
import { tabButton } from 'src/app/models/products.interface';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent {
  activeTab = 'breakfast';
  tabMenu: tabButton[] = [ // Array de objetos que contiene la info de las pestanas
    { name: 'breakfast', label: 'Desayunos' },
    { name: 'lunch-dinner', label: 'Almuerzos/Cenas' }
  ];

  onTabChange(tabName: string) {
    this.activeTab = tabName;
  }
}
