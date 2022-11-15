import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {

  }

  private url = 'http://localhost:8080/rest/products';

  getProducts() {
    return this.httpClient.get<Product[]>(this.url);
  }

  isTheLast(p: Product) {
    return p.stock===1;
  }
  
  isAvailable(p: Product) {
    return p.stock>0;
  }

  decreaseStock(p: Product) {
    p.stock-=1;
  }

}
