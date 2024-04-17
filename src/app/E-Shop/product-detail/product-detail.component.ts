import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataHelperService } from 'src/app/data-helper.service';
import { ApiService } from 'src/app/shared/api.service';
import { iProduct } from 'src/app/shared/product';
import { UserAuthService } from 'src/app/shared/user-auth.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    public dataHelper: DataHelperService,
    public userAuth: UserAuthService,
    public apiService: ApiService,
    public router: Router
  ) { }

  ngOnInit(): void {
    if (!this.dataHelper?.productDetail) {
      this.router.navigate(['/e-shop']);
    }
  }

  addProductToCart(product: iProduct) {
    this.apiService.addProductToCart(product);
  }

}
