import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { listResponseModel } from '../models/listResponseModel';

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
}
