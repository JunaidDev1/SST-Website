import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { Router } from '@angular/router';
import { iClientOrder } from 'src/app/shared/order';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { UserAuthService } from 'src/app/shared/user-auth.service';
import { DataHelperService } from 'src/app/data-helper.service';
import { ToastrService } from 'ngx-toastr';

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
    public router: Router,
    public apiService: ApiService,
    public firebaseDb: AngularFireDatabase,
    public dataHelper: DataHelperService,
    public userAuth: UserAuthService,
    public toastr: ToastrService
  ) {
    this.cartItems = apiService.getCartItems();
    if (!this.cartItems.length || !localStorage.getItem('uid')) {
      router.navigate(['/e-shop']);
    }
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
        this.saveDataIntoFirebase(data);
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions); 
        this.toastr.error('Payment cancelled');  
      },
      onError: err => {
        console.log('OnError', err); 
        this.toastr.error('Payment error'); 
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      }
    };
  }

  saveDataIntoFirebase(paymentData: any) {
    this.dataHelper.displayLoading = true;
    const clientOrder: iClientOrder = {
      paymentId: paymentData.id,
      orderId: this.firebaseDb.database.ref().child('orders').push().key,
      clientId: this.userAuth.currentUser.uid,
      status: 'Pending',
      createdOn: Number(new Date()),
      total: this.apiService.taxesFee + this.apiService.getSubTotal(),
      productIds: [], //TODO: Map this array from cart items
    }
    this.orderId = clientOrder.orderId;
    const urlPath = `orders/${clientOrder.orderId}`;
    this.dataHelper.updateDataOnFirebase(urlPath, clientOrder)
      .then(() => {
        this.apiService.clearCart();
        this.showSuccessPopup = true;
        this.toastr.success('Payment Success, order saved!');
        this.dataHelper.displayLoading = false;
      });
  }

}