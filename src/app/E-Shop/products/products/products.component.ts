import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  allProducts = [];
  loading: boolean = false;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    // this.postData();
    // this.getAllProducts();
  }
  postData(){
    this.http.post('https://sst-website-890d6-default-rtdb.firebaseio.com/users.json',[{name:'umair',age:28}]).subscribe(res =>{
      console.log('testtt',res)
    })
    
  }

}
