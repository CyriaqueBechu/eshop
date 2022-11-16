import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basket = this.customerService.basket;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.getBasket()
  }

  getBasket() {
    this.customerService.getBasket().subscribe();
  }
}
