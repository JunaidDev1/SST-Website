import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  key: any;

  constructor(public router: ActivatedRoute) {
    this.key = router.snapshot.routeConfig?.path;
   }

  ngOnInit(): void {
  }

}
