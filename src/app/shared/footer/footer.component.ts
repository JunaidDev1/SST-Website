import { Component, OnInit } from '@angular/core';
import { DataHelperService } from 'src/app/data-helper.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    public dataHelper: DataHelperService
  ) { }

  ngOnInit(): void {
  }

}
