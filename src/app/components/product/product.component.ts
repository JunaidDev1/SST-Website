import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataHelperService } from 'src/app/data-helper.service';
import { ApiService } from 'src/app/shared/api.service';
import { HttpHelperService } from 'src/app/shared/http-helper.service';
import { iProduct } from 'src/app/shared/product';
import { UserAuthService } from 'src/app/shared/user-auth.service';
import { AddProductComponent } from 'src/app/sharedComponents/add-product/add-product.component';
import { DeleteModalComponent } from 'src/app/sharedComponents/delete-modal/delete-modal.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() allProducts: iProduct[] = [];

  constructor(
    private router: Router,
    private dataHelper: DataHelperService,
    private httpHelper: HttpHelperService,
    private apiService: ApiService,
    private toastr: ToastrService,
    public userAuth: UserAuthService
  ) { }

  ngOnInit(): void {
  }

  productDetail(product: iProduct) {
    this.dataHelper.productDetail = product;
    this.router.navigate(['/product-detail']);
  }

  openDeleteConfirmationModal(productId: string) {
    this.httpHelper.openDeleteConfirmationModal(DeleteModalComponent, 'product')
      .then((result: string) => {
        if (result && result === 'Deleted') {
          this.toastr.success('Product deleted sucessfully!');
          this.removeServiceOnFirebase(productId);
        }
      });
  }

  removeServiceOnFirebase(productId: string) {
    const urlPath = `products/${productId}`;
    this.dataHelper.removeFirebaseData(urlPath)
      .then(() => {
        location.reload();
      });
  }

  addProduct(product = new iProduct()) {
    this.httpHelper
      .openSharedModal(AddProductComponent, 'product', product, 'lg')
      .then((result: any) => {
        if (result && result.seller?.uid) {
          this.saveProductOnFirebase(result.seller);
          const index = this.allProducts.findIndex(x => x.productId === result.category.productId);
          index < 0 ? this.allProducts.push(result.category) : this.allProducts[index] = result.category;
        }
      });
  }

  saveProductOnFirebase(product: iProduct) {
    const urlPath = `products/${product.productId}`;
    this.dataHelper.updateDataOnFirebase(urlPath, product)
      .then(() => {
        location.reload();
        this.toastr.success('Product saved successfully!');
      });
  }

  addToCart(product: iProduct) {
    this.apiService.addProductToCart(product);
  }

  addProductToCart(product: iProduct) {
    this.apiService.addProductToCart(product);
  }

}
