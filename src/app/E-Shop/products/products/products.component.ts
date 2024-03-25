import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { productData } from 'src/app/shared/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  allProducts = [];
  loading: boolean = false;
  searchQuery: string = '';
  hasSearchQuery: boolean = false;
  productModelObject: productData = new productData;
  productForm: FormGroup;
  editForm: FormGroup;
  myLocalArray: any = [];
  searchValue: any;
  totalLength: any;
  p: any;
  formattedArray: any = {};
  editValue: any;
  editableId: any;
  deleteIndexId: any;
  selectedFile!: File;
  productImage: any;
  sortingOrder: string = 'ascending';
  mySelectedIndexFilter: any;
  url: any;
  deleted: any;
  selectedItem: any;
  cartItems: any;


  constructor(
    private http: HttpClient,
    private apiService: ApiService,
    private storage: AngularFireStorage,
    private router: Router,
  ) {
    this.productForm = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      picture: new FormControl(''),
      category: new FormControl(''),
      id: new FormControl('')
    });

    this.editForm = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      picture: new FormControl(''),
      category: new FormControl(''),
      id: new FormControl('')
    });

  }

  ngOnInit(): void {
    // this.postData();
    // this.getAllProducts();
    this.getAllData();
    this.apiService.ngxServiceLoader();
  }

  // postData() {
  //   this.http.post('https://sst-website-890d6-default-rtdb.firebaseio.com/users.json', [{ name: 'umair', age: 28 }]).subscribe(res => {
  //     console.log('testtt', res)
  //   })

  // }

  // ----------------------------------------------------------------------------------------------------------------------------------
  getAllData(): void {
    this.apiService.getProducts().subscribe((fireBaseData: any) => {
      this.myLocalArray = fireBaseData;
    });
  }
  searchButton() {
    if (this.myLocalArray.length) {
      const filteredDataArr = this.myLocalArray.filter((data: any) =>
        data.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        data.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      this.myLocalArray = filteredDataArr;
    } else {
      return this.myLocalArray;
    }
  }

  resetFilters() {
    this.searchQuery = '';
    this.hasSearchQuery = false;
    this.getAllData();
  }

  sortArray(property: any, order: string) {
    if (order == 'ascending') {
      this.myLocalArray.sort((a: any, b: any) => b[property] > a[property] ? -1 : 1);
      this.sortingOrder = 'descending';
    } else {
      this.myLocalArray.sort((a: any, b: any) => b[property] > a[property] ? 1 : -1);
      this.sortingOrder = 'ascending';
    }
  }

  viewProduct(productId: string) {
    this.apiService.setProductId(productId);
    // this.router.navigate(['/view-product', productId]);
  }

  resetForm() {
    this.productForm.reset();
  }

  addImage(event: any) {
    this.selectedFile = event.target.files[0];
    this.apiService.ngxServiceLoader();
  }

  async onUpdate() {
    this.apiService.ngxServiceLoader();
    const filePath = `productImages/${Date.now()}`;
    const snap = await this.storage.upload(filePath, this.selectedFile);
    this.getUrlForImage(snap);
  }
  async getUrlForImage(snap: any) {
    const url = await snap.ref.getDownloadURL();
    if (url) {
      const userObject = this.editForm.value;
      userObject['picture'] = url;
      this.apiService.updateProduct(userObject, this.editableId);
      this.editForm.reset();
    }
  }

  deleteProduct(deleteIndexId: any) {
    this.apiService.ngxServiceLoader();
    this.apiService.deleteProduct(deleteIndexId);
  }
  onEdit(id: any) {
    const mySelectedIndexFilter = this.myLocalArray.find((data: any) => data.id === id);
    this.editForm.setValue({
      name: mySelectedIndexFilter.name,
      price: mySelectedIndexFilter.price,
      description: mySelectedIndexFilter.description,
      picture: mySelectedIndexFilter.picture
    });
    this.productImage = mySelectedIndexFilter.picture;
    this.editableId = id;
  }
  get f() {
    return this.productForm.controls;
  }
  async uploadDataoFireStorage() {
    this.apiService.ngxServiceLoader();
    const filePath = `productImages/${Date.now()}`;
    const snap = await this.storage.upload(filePath, this.selectedFile);
    this.getUrl(snap);
  }
  async getUrl(snap: any) {
    const url = await snap.ref.getDownloadURL();
    this.url = url;
    if (url) {
      let userObject = this.productForm.value;
      userObject['picture'] = url;
      this.apiService.addProduct(userObject);
      // this.dataService.notifyNewProductAdded();
      this.productForm.reset();
    }
    this.productImage = '';
  }
  addToCart(product: productData){
    this.apiService.addToCart(product);
  }

}
