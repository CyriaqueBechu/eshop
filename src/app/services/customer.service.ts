import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private basket: Product[] = [];

  addProduct(p: Product) {
    this.basket.push(p);
  }

  getTotal() {
    return this.basket.reduce((total, { price }) => total + price, 0);
  }

}
