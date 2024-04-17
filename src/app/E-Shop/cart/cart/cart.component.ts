import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(public apiService: ApiService, private route: Router) { }

  ngOnInit(): void {
    this.cartItems = this.apiService.getCartItems();
  }
  // removeItem(item: any): void {
  //   this.apiService.removeFromCart(item);
  //   this.cartItems = this.apiService.getCartItems();
  // }

  removeOne(item: any): void {
    this.apiService.removeOneFromCart(item);
    this.cartItems = this.apiService.getCartItems();
  }
  addToCart(item: any): void {
    this.apiService.addProductToCart(item);
    this.cartItems = this.apiService.getCartItems();
  }
  proceedToCheckout(): void {
    this.route.navigate(['/checkout']);
  }
  continueShopping(): void {
    this.route.navigate(['/e-shop']);
  }

  clearCart() {
    this.cartItems = [];
    this.apiService.clearCart();
  }

}
