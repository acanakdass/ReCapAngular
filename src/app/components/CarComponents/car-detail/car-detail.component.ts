import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarService,
    private carImageService: CarImageService,
    private cartService: CartService,
    private toastrService: ToastrService
  ) { }

  carDataLoaded = false
  carDetailsData: Car;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getCarById(params["carId"]);
        // console.log(this.carDetailsData.brandName)
      }
    })
  }

  getCarById(carId: number) {
    this.carService.getCarById(carId).subscribe(res => {
      this.carDetailsData = res.data;
      this.carDataLoaded = true;
      // console.log(res);
    })
  }

  getFullImagePath(path: string) {
    let fullPath = this.carImageService.getFullPath(path);
    // console.log(fullPath);
    return fullPath;
  }

  addToCart(car: Car) {
    this.cartService.addToCart(car);
    this.toastrService.success("Araç Sepete Eklendi")
  }
}
