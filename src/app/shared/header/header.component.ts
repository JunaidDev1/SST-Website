import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  key: any;
  ageedToTerms = false;

  constructor(
    private route: Router,
    public router: ActivatedRoute,
    public userAuth: UserAuthService,
    public apiService: ApiService
  ) {
    this.key = router.snapshot.routeConfig?.path;
  }

  ngOnInit(): void {
  }

  openCartDialog() {
    this.route.navigate(['/cart']);
  }

  removeItem(item: any) {
    this.apiService.removeFromCart(item);
  }

}
