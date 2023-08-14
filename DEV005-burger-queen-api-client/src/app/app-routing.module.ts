import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookComponent } from './componets/cook/cook.component';
import { WaiterComponent } from './componets/waiter/waiter.component';
// designa las constantes de las rutas y las define.
const routes: Routes = [
  { path: 'cook-component', component: CookComponent,  },
  { path: 'waiter-component', component: WaiterComponent,  }
];
// Configura los exports e imports de NgModule
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
