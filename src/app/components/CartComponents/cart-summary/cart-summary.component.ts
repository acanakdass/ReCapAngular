import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  isDataLoaded: boolean;
  cartItems: Car[];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCartItems();
  }
  getCartItems() {
    this.cartItems = this.cartService.listCart();
    this.isDataLoaded = true;
  }
}
