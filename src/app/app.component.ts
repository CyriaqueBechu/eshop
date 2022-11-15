import { Component } from '@angular/core';
import { Product } from './model/product';
import { ProductService } from './services/product.service';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eshop';

  product: Product[];

  constructor(private productService: ProductService, private customerService: CustomerService) {
    this.product = productService.getProducts();
    
  }
  
  

  getTotal(): number {
    return this.customerService.getTotal();
  }

  public updatePrice(p: Product) {
    this.customerService.addProduct(p)
    this.productService.decreaseStock(p)
  }

  isAvailable(p: Product) {
    return this.productService.isAvailable(p);
  }
}
