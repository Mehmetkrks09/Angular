import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import { Observable } from 'rxjs';
import { listResponseModul } from '../models/listResponseModel';

import { Category } from '../models/Category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl="https://localhost:44314/api/categories/getall"
  constructor(private httpClient:HttpClient) { }
  getCategories():Observable<listResponseModul<Category>> {
    return this.httpClient.get<listResponseModul<Category>>(this.apiUrl);
   
  }
}
