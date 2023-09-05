import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/products.interface';
import { CommunicationServiceService } from 'src/app/services/communication-service.service';

@Component({
  selector: 'app-cook',
  templateUrl: './cook.component.html',
  styleUrls: ['./cook.component.css']
})
export class CookComponent implements OnInit {
  orders: Order[] = [];

  constructor(private communicationService: CommunicationServiceService) {
    // lo suscribimos al observable orders$ para recibir actualizaciones en tiempo real de las ordenes
    this.communicationService.orders$.subscribe(orders => {
      this.orders = orders;
    })
  }

  ngOnInit() {
    console.log(this.orders, 'Soy cook component');
  }

}

