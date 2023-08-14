import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componets/login/login.component';
import { WaiterComponent } from './componets/waiter/waiter.component';
// designa las constantes de las rutas y las define.
const routes: Routes = [
  { path: 'login-component', component: LoginComponent,  },
  { path: 'orders-component', component: WaiterComponent,  }
];
// Configura los exports e imports de NgModule
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
