import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
// designa las constantes de las rutas y las define.
const routes: Routes = [
  { path: 'login-component', component: LoginComponent },
  { path: 'orders-component', component: OrdersComponent }
];
// Configura los exports e imports de NgModule
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
