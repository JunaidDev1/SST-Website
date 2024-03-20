import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  allProducts = [];
  loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // this.getAllProducts();
  }
  // getAllProducts() {
  //   var self = this;
  //   this.loading = true;
  //   firebase.database().ref().child('products')
  //     .once('value', (snapshot) => {
  //       var data = snapshot.val();
  //       for (var key in data) {
  //         var temp = data[key];
  //         temp.key = key;
  //         self.allProducts.push(temp);
  //       }
  //       self.service.allProducts = self.allProducts;
  //       self.loading = false;
  //     })
  // }

}
