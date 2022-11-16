import { Component, Inject, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { CustomerService } from '../services/customer.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  basket = this.customerService.basket;

  constructor(private productService: ProductService, private customerService: CustomerService, @Inject('title') public title: string) {
  }
  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (products) => {
        this.products = products.map((p) => new Product(p.title, p.description, p.photo, p.price, p.stock))
      }
    );
  }

  
  getTotal(): number {
    return this.customerService.getTotal();
  }

  public updatePrice(p: Product) {
    this.customerService.addProduct(p).subscribe(
        () => this.productService.decreaseStock(p)
      );
  }

  isAvailable(p: Product) {
    return this.productService.isAvailable(p);
  }
}
