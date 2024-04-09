import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataHelperService } from 'src/app/data-helper.service';
import { iClientOrder } from 'src/app/shared/order';
import { UserAuthService } from 'src/app/shared/user-auth.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  searchQuery = '';
  p: number = 1;
  itemPerPage: number = 10;
  totalItems: any;
  activeTab: string = 'new';
  allOrders: iClientOrder[] = [];

  constructor(
    public userAuth: UserAuthService,
    public dataHelper: DataHelperService,
    public router: Router) { }

  ngOnInit(): void {
    if (this.dataHelper.dataFetching.allOrdersFetched) {
      this.filterMyOrders();
    } else {
      this.getAllOrders();
    }
  }

  getAllOrders() {
    this.dataHelper.getDataObservable().subscribe((data: any) => {
      if (data.allOrdersFetched) {
        this.filterMyOrders();
      }
    });
  }

  filterMyOrders() {
    const allOrders = this.dataHelper.allOrders.sort((a, b) => b.createdOn - a.createdOn);
    if (this.userAuth.currentUser.isSuperAdmin) {
      this.allOrders = allOrders;
    } else {
      this.allOrders = allOrders.filter(x => x.clientId === this.userAuth.currentUser.uid);
    }
  }

  orderDetail(order: iClientOrder) {
    this.dataHelper.orderDetails = order;
    this.router.navigate(['/order-detail']);
  }

  matchesSearchQuery(order: iClientOrder): boolean {
    if (!order?.orderId) {
      return false;
    }
    if (this.searchQuery.trim() === '') {
      return true;
    }
    const orderID = order.shippingInfo.firstName.trim().toLowerCase();
    return orderID.includes(this.searchQuery.toLowerCase());
  }

}
