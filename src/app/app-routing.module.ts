import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { HomeComponent } from './home/home.component';
import { BasketGuard } from './guards/basket.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'basket', component: BasketComponent, canActivate: [BasketGuard]},
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
