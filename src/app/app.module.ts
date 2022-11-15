import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: 'title', useValue: 'Welcome to Zenika Ecommerce' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
