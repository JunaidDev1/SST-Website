import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-checkout-old',
  templateUrl: './checkout-old.component.html',
  styleUrls: ['./checkout-old.component.scss']
})
export class CheckoutOldComponent implements OnInit {

  selectedPaymentMethod: string = '';
  states: string[] = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
  ];

  checkoutData: any = {
    totalAmount: 0.1
  };
  cartItems: any[] = [];

  constructor(
    public apiService: ApiService) {
    this.cartItems = apiService.getCartItems();
  }

  ngOnInit(): void {
  }

  updateSelectedPaymentMethod(method: string) {
    this.selectedPaymentMethod = method;
  }

  submitCheckoutForm(): void {
    this.apiService.processStripePayment(this.checkoutData)
      .then(response => {
        console.log(response);
      });
  }

  submitPaypapl() {
    const amount = 0.1;
    const cardNumber = '4032030743562119';
    const expiryDate = '03/29';
    const cvv = '123';
    this.apiService.processPaypalPayment(cardNumber, expiryDate, cvv, amount)
      .subscribe(
        (response) => {
          console.log('Payment successful:', response);
          // Handle success response
        },
        (error) => {
          console.error('Error processing payment:', error);
          // Handle error
        }
      );
  }

}
