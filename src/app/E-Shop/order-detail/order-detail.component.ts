import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataHelperService } from 'src/app/data-helper.service';
import { iClientOrder } from 'src/app/shared/order';
import { iProduct } from 'src/app/shared/product';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  orderProducts: iProduct[] = [];
  orderDetails: iClientOrder;

  constructor(
    public router: Router,
    public dataHelper: DataHelperService,
  ) { }

  ngOnInit(): void {
    const allProducts = this.dataHelper.allProducts;
    this.orderDetails = this.dataHelper.orderDetails || new iClientOrder();
    if (this.orderDetails.productIds?.length) {
      this.orderDetails.productIds.forEach(x => {
        const selectedProduct = allProducts.find(product => product.productId === x.productId);
        if (selectedProduct && selectedProduct.productId) {
          this.orderProducts.push(selectedProduct);
        }
      });
    }
  }

  getProductPriceFromOrder(product: iProduct): number {
    return this.orderDetails.productIds.find(x => x.productId === product.productId).productPrice;
  }

  getProductQty(product: iProduct): number {
    return this.orderDetails.productIds.find(x => x.productId === product.productId).quantity;
  }

  productDetails(product: iProduct) {
    this.dataHelper.productDetail = product;
    this.router.navigate(['/product-detail']);
  }

}
