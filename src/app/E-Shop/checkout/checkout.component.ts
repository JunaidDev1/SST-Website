import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  checkoutData: any = {};

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }
  submitCheckoutForm(): void {
    this.apiService.processCheckout(this.checkoutData).subscribe(response => {
      console.log(response);
    });
  }

}
