import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from '../models/car';
import { CartItems } from '../models/cartItems';
import { ErrorResult } from '../models/Results/ErrorResult';
import { Result } from '../models/Results/result';
import { SuccessResult } from '../models/Results/successResult';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private toastrService: ToastrService) { }
  addToCart(car: Car) {
    let item = CartItems.find(c => c.id === car.id);
    if (item) {
      this.toastrService.info("Araç Sepete Daha Önce Eklenmiş");
    } else {
      CartItems.push(car);
    }
  }

  removeFromCart(carId: number): Result {
    let item = CartItems.find(c => c.id === carId);
    if (item) {
      CartItems.splice(CartItems.indexOf(item), 1)
      return new SuccessResult("Araç sepetten silindi");
    } else {
      return new ErrorResult("Araç sepetten silinirken bir hata oluştu");
    }
  }
  listCart(): Car[] {
    return CartItems;
  }
}
