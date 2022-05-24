import { Component, OnInit } from '@angular/core';
import { DataHelperService } from '../data-helper.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(
    public dataHelper: DataHelperService
  ) { }

  ngOnInit(): void {
  }

}
