import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { listResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:34070/api/";
  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<listResponseModel<Car>> {
    let newUrl = this.apiUrl + "cars";
    return this.httpClient.get<listResponseModel<Car>>(newUrl);
  }

  getCarsByBrand(brandId: number): Observable<listResponseModel<Car>> {
    let newUrl = this.apiUrl + "cars/getByBrand/" + brandId;
    return this.httpClient.get<listResponseModel<Car>>(newUrl);
  }
  getCarsByColor(colorId: number): Observable<listResponseModel<Car>> {
    let newUrl = this.apiUrl + "cars/getByColor/" + colorId;
    return this.httpClient.get<listResponseModel<Car>>(newUrl);
  }

  getCarsByColorAndBrand(colorId: number, brandId: number): Observable<listResponseModel<Car>> {
    let newUrl = this.apiUrl + "cars/GetByColorAndBrand?colorId=" + colorId + "&brandId=" + brandId;
    return this.httpClient.get<listResponseModel<Car>>(newUrl);
  }

  getCarById(carId: number): Observable<SingleResponseModel<Car>> {
    let newUrl = this.apiUrl + "cars/" + carId;
    console.log(newUrl);
    return this.httpClient.get<SingleResponseModel<Car>>(newUrl);

  }
}
