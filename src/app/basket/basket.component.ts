import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basket = this.customerService.basket;
  customer = this.customerService.customer;

  constructor(private customerService: CustomerService, private router: Router) {}

  ngOnInit(): void {
    this.getBasket()
  }

  getBasket() {
    this.customerService.getBasket().subscribe();
  }

  checkout() {
    this.customerService.checkout(this.customer).subscribe(() => this.router.navigate(['']))
  }

}
