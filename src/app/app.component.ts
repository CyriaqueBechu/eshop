import { Component, Inject } from '@angular/core';
import { Product } from './model/product';
import { ProductService } from './services/product.service';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[] = [];

  basket = this.customerService.basket;

  constructor(private productService: ProductService, private customerService: CustomerService, @Inject('title') public title: string) {
  }

  ngOnInit(): void {
    this.getProducts()
    this.getBasket()
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (products) => {
        this.products = products.map((p) => new Product(p.title, p.description, p.photo, p.price, p.stock))
      }
    );
  }

  getBasket() {
    this.customerService.getBasket().subscribe();
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
