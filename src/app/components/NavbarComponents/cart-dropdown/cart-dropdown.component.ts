import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarImageService } from 'src/app/services/car-image.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-dropdown',
  templateUrl: './cart-dropdown.component.html',
  styleUrls: ['./cart-dropdown.component.css']
})
export class CartDropdownComponent implements OnInit {

  isDataLoaded: boolean;
  cartItems: Car[];

  constructor(
    private cartService: CartService,
    private carImageService: CarImageService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.getCartItems();
  }
  getCartItems() {
    this.cartItems = this.cartService.listCart();
    this.isDataLoaded = true;
  }

  removeFromCart(carId: number) {
    let result = this.cartService.removeFromCart(carId);
    if (result.success) {
      this.toastrService.success(result.message)
    } else {
      this.toastrService.error(result.message)
    }
  }

  getFullImagePath(path: string) {
    let fullPath = this.carImageService.getFullPath(path);
    // console.log(fullPath);
    return fullPath;
  }
}
