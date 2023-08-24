import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.css']
})
export class TabBarComponent {
  activeTab = 'breakfast';  // variable que almacena el nombre de la pestaña activa actual.

  tabs = [ // Array de objetos que contiene la info de las pestanas
    { name: 'breakfast', label: 'Desayunos' },
    { name: 'lunch-dinner', label: 'Almuerzos/Cenas' }
  ];

  // Función que se llama cuando se hace clic en una pestaña. Cambia la activeTab al nombre de la pestaña seleccionada.
  openTab(tabName: string) {
    this.activeTab = tabName;
  }
}
