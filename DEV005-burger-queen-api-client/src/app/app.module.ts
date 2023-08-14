import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// No es necesario importar Router, ActivatedRoute, ni ParamMap aquí

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookComponent } from './componets/cook/cook.component';
import { WaiterComponent } from './componets/waiter/waiter.component';

@NgModule({
  declarations: [
    AppComponent,
    CookComponent,
    WaiterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
