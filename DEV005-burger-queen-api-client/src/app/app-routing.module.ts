import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookComponent } from './components/cook/cook.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { CookGuard } from './guards/cook.guard';
import { WaiterGuard } from './guards/waiter.guard';
import { AdminGuard } from './guards/admin.guard';

// designa las constantes de las rutas y las define.
const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'cook-component', component: CookComponent, canActivate: [CookGuard, AuthGuard]},
  { path: 'waiter-component', component: WaiterComponent, canActivate: [WaiterGuard, AuthGuard] },
  { path: 'admin-component', component: AdminComponent, canActivate: [AdminGuard, AuthGuard] },
];
// Configura los exports e imports de NgModule
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
