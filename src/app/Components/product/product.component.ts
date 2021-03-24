import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { CartItem } from 'src/app/models/cartItem';
import { listResponseModul } from 'src/app/models/listResponseModel';
import { product } from 'src/app/models/product';
import { CartService } from 'src/app/Services/cart.service';

import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: product[] = [];
  dataLoaded = false;
  filterText="";

  constructor(
    private productService: ProductService,
    private activatedRouted: ActivatedRoute,
    private toastrService:ToastrService,
    private cartService:CartService,
    
  ) {}

  ngOnInit(): void {
    this.activatedRouted.params.subscribe(params => {
      if (params['categoryId']) {
        this.getproductsByCategory(params['categoryId'])
      } 
      else {
        this.getproducts();
      }
    });
  }
  getproducts() {
    this.productService.getproducts().subscribe((response) => {
      this.products = response.data;
    });
  }
  getproductsByCategory(categoryId: number) {
    this.productService
      .getproductsByCategory(categoryId)
      .subscribe((response) => {
        this.products = response.data;
      }); 
  }
  addToCart(product:product){
   this.toastrService.success("Sepete Eklendi",product.productName)
   this.cartService.addToCart(product)
  }
}
