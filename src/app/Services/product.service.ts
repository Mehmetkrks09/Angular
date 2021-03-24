import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { listResponseModul } from '../models/listResponseModel';
import { product } from '../models/product';
import { Category } from '../models/Category';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44314/api/';
  constructor(private httpClient: HttpClient) {}
  getproducts(): Observable<listResponseModul<product>> {
    let newPath = this.apiUrl + 'products/getall';
    return this.httpClient.get<listResponseModul<product>>(newPath);
  }
  getproductsByCategory(
    categoryId: number
  ): Observable<listResponseModul<product>> {
    
      
      let newPath = this.apiUrl + "products/getbycategory?categoryId="+categoryId
    return this.httpClient.get<listResponseModul<product>>(newPath);
  }
}
