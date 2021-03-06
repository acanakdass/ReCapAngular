import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  isDataLoaded = false;

  constructor(private carService: CarService,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

      if (params["colorId"] && params["brandId"]) {
        this.getCarsByColorAndBrand(params["colorId"], params["brandId"]);
      } else if (params["colorId"]) {
        this.getCarsByColorId(params["colorId"]);
      } else if (params["brandId"]) {
        this.getCarsByBrandId(params["brandId"]);
      } else {
        this.getCars();
      }

    })
  }
  getCars() {
    this.carService.getCars().subscribe(response => {
      this.cars = response.data;
      this.isDataLoaded = true;
      console.log(this.cars)
    });
  }
  getCarsByBrandId(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe(response => {
      this.cars = response.data;
      this.isDataLoaded = true;
    });
  }
  getCarsByColorId(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe(response => {
      this.cars = response.data;
      console.log(response)
      this.isDataLoaded = true;
    });
  }
  getCarsByColorAndBrand(colorId: number, brandId: number) {
    this.carService.getCarsByColorAndBrand(colorId, brandId).subscribe(res => {
      if (res.data == null) {
        this.cars = []
        this.isDataLoaded = true

      } else {

        this.cars = res.data;
        this.isDataLoaded = true
      }

      console.log(res);
    })
  }

}
