import { Component, OnInit } from '@angular/core';
import { DataHelperService } from 'src/app/data-helper.service';
import { ApiService } from 'src/app/shared/api.service';
import { iProduct } from 'src/app/shared/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(public dataHelper: DataHelperService, public apiService: ApiService) { }

  ngOnInit(): void {
  }

  addProductToCart(product: iProduct) {
    this.apiService.addProductToCart(product);
  }

}
