import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from 'src/app/models/product';

import { productResponseModel } from 'src/app/models/productResponseModel';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {


  products:product[]= [];
  dataLoaded=false
 
  productResponseModel:productResponseModel={
    data:this.products,
    message:"",
    success:true
  };

  constructor(private productService:ProductService) {}

  ngOnInit(): void {
   this.getproducts()
  }
  getproducts() {
    this.productService.getproducts().subscribe(response=>{this.products=response.data})
    };
  }

