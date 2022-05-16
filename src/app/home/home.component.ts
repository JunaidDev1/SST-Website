import { Component, OnInit } from '@angular/core';
import { DataHelperService } from '../data-helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ourServices: any[] = this.dataHelper.ourServices;
  ourTeam: any[] = this.dataHelper.ourTeam;
  reviews: any[] = this.dataHelper.reviews;

  constructor(
    public dataHelper: DataHelperService
  ) { }

  ngOnInit(): void {
  }

}
