import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataHelperService } from 'src/app/data-helper.service';
import { iClientOrder, iOrderProduct } from 'src/app/shared/order';
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
  allOrders: any[] = [
    {
      orderId: 'order_id_1',
      createdOn: 1634523600000,
      status: 'Pending',
      total: 47.27,
    },
    {
      orderId: 'order_id_2',
      createdOn: 1634523600000,
      status: 'Approved',
      total: 47.27,
    },
    {
      orderId: 'order_id_3',
      createdOn: 1634523600000,
      status: 'Completed',
      total: 47.27,
    },
    {
      orderId: 'order_id_4',
      createdOn: 1634523600000,
      status: 'Approved',
      total: 47.27,
    }
  ]


  constructor(public userAuth: UserAuthService, public dataHelper: DataHelperService, public router: Router) { }

  ngOnInit(): void {
  }

  orderDetail(order: any) {
    this.dataHelper.orderDetails = order;
    this.router.navigate(['/order-detail']);
  }

  matchesSearchQuery(order: iClientOrder): boolean {
    if (!order || !order.orderId) {
      return false;
    }
    if (this.searchQuery.trim() === '') {
      return true;
    }
    const orderID = order.orderId.trim().toLowerCase();
    return orderID.includes(this.searchQuery.toLowerCase());
  }

}
