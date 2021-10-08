import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  basePath = "https://localhost:34070/";
  apiUrl = "https://localhost:34070/api/carImages";
  constructor(private httpClient: HttpClient) { }

  getCarImages(): Observable<listResponseModel<string>> {
    return this.httpClient.get<listResponseModel<string>>(this.apiUrl);
  }
  getFullPath(imagePath: string) {
    return this.basePath + imagePath
  }
}
