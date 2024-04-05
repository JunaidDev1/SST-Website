import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataHelperService } from 'src/app/data-helper.service';
import { ApiService } from 'src/app/shared/api.service';
import { iProduct } from 'src/app/shared/product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  allProducts: iProduct[] = [];

  constructor(
    public apiService: ApiService,
    public dataHelper: DataHelperService,
    public router: Router
  ) { }

  ngOnInit(): void {
    if (this.dataHelper.dataFetching.allProductFetched) {
      this.allProducts = this.dataHelper.allProducts.sort((a, b) => b.createdOn - a.createdOn);
    } else {
      this.getAllProducts();
    }
  }

  getAllProducts() {
    this.dataHelper.getDataObservable().subscribe((data: any) => {
      if (data.allProductFetched) {
        this.allProducts = this.dataHelper.allProducts.sort((a, b) => b.createdOn - a.createdOn);
      }
    });
  }

  addToCart(product: iProduct) {
    this.apiService.addProductToCart(product);
  }

  productDetail(product: iProduct) {
    this.dataHelper.productDetail = product;
    this.router.navigate(['/product-detail'])
  }

  addProductToCart(product: iProduct) {
    this.apiService.addProductToCart(product);
  }

}
