import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url = 'http://localhost:8080/rest/basket';

  basket: Product[] = [];

  constructor(private httpClient: HttpClient) {}
 

  addProduct(p: Product) {
    return this.httpClient.post(this.url, p).pipe(tap(() => {
      this.basket.push(p);
    }));
  }

  getTotal() {
    return this.basket.reduce((total, { price }) => total + price, 0);
  }

  getBasket() {
    return this.httpClient.get<Product[]>(this.url).pipe(
      tap((products) => {
        this.basket.length = 0;
        this.basket.push(...products);
      }),
      map((p) => undefined)
    );
  }
}
