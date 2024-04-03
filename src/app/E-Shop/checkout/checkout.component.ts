import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  payPalConfig?: IPayPalConfig;
  cartItems: any[] = [];
  alertMsg = '';
  showErrorAlert = false;
  showSuccessPopup = false;
  orderId = '';

  constructor(
    public apiService: ApiService,
    public router: Router
  ) {
    this.cartItems = apiService.getCartItems();
  }

  ngOnInit(): void {
    this.initConfig();
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'USD',
      clientId: 'AXR7BvEPLkQIkGk4-U-nF3u_s-fvAfROGZQJpJ5lcGvyingP2MUeilnpacsicSlwvgJWUEY9WqJinF5s',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'USD',
            value: '1',
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: '1'
              }
            }
          },
          items: [{
            name: 'Enterprise Subscription',
            quantity: '1',
            category: 'DIGITAL_GOODS',
            unit_amount: {
              currency_code: 'USD',
              value: '1',
            },
          }]
        }]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then((details: any) => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        this.saveDataIntoFirebase();
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
        this.alertMsg = 'Payment cancelled';
        this.showErrorAlert = true;
        setTimeout(() => {
          this.showErrorAlert = false;
        }, 3000);
      },
      onError: err => {
        console.log('OnError', err);
        this.alertMsg = 'Payment error';
        this.showErrorAlert = true;
        setTimeout(() => {
          this.showErrorAlert = false;
        }, 3000);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      }
    };
  }

  //TODO: Here we're gonna create an order object having user id and payment id with other info
  saveDataIntoFirebase() {
    this.orderId = '1234567890'; // Will be dynamic order id based on firebase key
    this.apiService.clearCart();
    this.showSuccessPopup = true;
    alert('Payment Success, we will save actual data on firebase!');
  }

}