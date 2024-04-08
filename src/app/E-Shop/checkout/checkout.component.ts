import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { Router } from '@angular/router';
import { iClientOrder, iOrderProduct, IShippingInfo } from 'src/app/shared/order';
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
    const subTotal = this.apiService.taxesFee + this.apiService.getSubTotal();
    const grandTotal = subTotal.toFixed(2);
    this.payPalConfig = {
      currency: 'USD',
      clientId: 'AXR7BvEPLkQIkGk4-U-nF3u_s-fvAfROGZQJpJ5lcGvyingP2MUeilnpacsicSlwvgJWUEY9WqJinF5s',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'USD',
            value: grandTotal,
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: grandTotal
              }
            }
          },
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
    this.orderId = paymentData.id;
    const shippingInfo = new IShippingInfo();
    shippingInfo.firstName = paymentData.payer?.name?.given_name ?? '';
    shippingInfo.lastName = paymentData.payer?.name?.surname ?? '';
    shippingInfo.email = paymentData.payer?.email_address ?? '';
    shippingInfo.phone = paymentData.payer?.phone_number ?? '';
    shippingInfo.payerId = paymentData.payer?.payer_id ?? '';
    shippingInfo.streetAddress = paymentData.purchase_units[0].shipping?.address?.address_line_1 ?? '';
    shippingInfo.state = paymentData.purchase_units[0].shipping?.address?.admin_area_1 ?? '';
    shippingInfo.city = paymentData.purchase_units[0].shipping?.address?.admin_area_2 ?? '';
    shippingInfo.country = paymentData.purchase_units[0].shipping?.address?.county_code ?? '';
    shippingInfo.zipCode = paymentData.purchase_units[0].shipping?.address?.postal_code ?? '';

    const clientOrder: iClientOrder = {
      paymentId: paymentData.id,
      orderId: this.firebaseDb.database.ref().child('orders').push().key,
      clientId: this.userAuth.currentUser.uid,
      status: 'Pending',
      createdOn: Number(new Date()),
      subTotal: this.apiService.getSubTotal(),
      taxFee: this.apiService.taxesFee,
      grandTotal: this.apiService.taxesFee + this.apiService.getSubTotal(),
      shippingInfo: shippingInfo,
      productIds: this.getSelectedProducts(),
    }

    const urlPath = `orders/${clientOrder.orderId}`;
    this.dataHelper.updateDataOnFirebase(urlPath, clientOrder)
      .then(() => {
        this.apiService.clearCart();
        this.showSuccessPopup = true;
        this.toastr.success('Payment Success, order saved!');
        this.dataHelper.displayLoading = false;
      });
  }

  getSelectedProducts(): iOrderProduct[] {
    const orderProducts = this.cartItems
      .map((x) => {
        return { productId: x.productId, productPrice: x.price, quantity: x.quantity }
      });
    return orderProducts;
  }

}