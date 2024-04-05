import { Component, OnInit } from '@angular/core';
import { DataHelperService } from 'src/app/data-helper.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  imageUrls = ['https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=600']

  constructor(public dataHelper: DataHelperService) { }

  ngOnInit(): void {
  }

}
