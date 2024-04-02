import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cartItems: any[] = [];

  constructor(
    public apiService: ApiService) {
    this.cartItems = apiService.getCartItems();
  }

  ngOnInit(): void {
  }

}
