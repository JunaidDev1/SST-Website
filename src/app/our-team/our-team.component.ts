import { Component, OnInit } from '@angular/core';
import { DataHelperService } from '../data-helper.service';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {

  constructor(
    public dataHelper: DataHelperService
  ) { }

  ngOnInit(): void {
  }

}
