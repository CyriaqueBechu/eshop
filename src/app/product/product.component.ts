import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public productService: ProductService) { }

  @Input()
  data!: Product;

  @Output()
  addToBasket = new EventEmitter<Product>();

  addToBasketFunction() {
    this.addToBasket.emit(this.data);
  }

  ngOnInit(): void {
  }



}
