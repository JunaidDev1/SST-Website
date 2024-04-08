import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataHelperService } from 'src/app/data-helper.service';
import { ApiService } from 'src/app/shared/api.service';
import { HttpHelperService } from 'src/app/shared/http-helper.service';
import { iProduct } from 'src/app/shared/product';
import { UserAuthService } from 'src/app/shared/user-auth.service';
import { AddProductComponent } from 'src/app/sharedComponents/add-product/add-product.component';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss']
})
export class MyProductsComponent implements OnInit {

  allProducts: iProduct[] = [];

  constructor(
    private toastr: ToastrService,
    public apiService: ApiService,
    private httpHelper: HttpHelperService,
    public dataHelper: DataHelperService,
    public router: Router,
    public userAuth: UserAuthService
  ) {
    if (!userAuth.currentUser.isSuperAdmin) {
      router.navigate(['/e-shop']);
    }
  }

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
        const allProducts = this.dataHelper.allProducts.sort((a, b) => b.createdOn - a.createdOn);
        this.allProducts = allProducts.filter(x => x.ownerId === this.userAuth?.currentUser?.uid);
      }
    });
  }

  addProduct(product = new iProduct()) {
    this.httpHelper.openSharedModal(AddProductComponent, 'product', product, 'lg')
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

}