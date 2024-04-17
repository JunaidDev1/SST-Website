import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { iUser } from 'src/app/shared/user';
import { ApiService } from 'src/app/shared/api.service';
import { UserAuthService } from 'src/app/shared/user-auth.service';
import { DataHelperService } from 'src/app/data-helper.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  showAlert: boolean;
  onLoginForm: any = FormGroup;
  user: iUser = new iUser();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public apiService: ApiService,
    public userAuth: UserAuthService,
    public dataHelper: DataHelperService,
    private toastr: ToastrService
  ) {
    if (userAuth.currentUser.uid) {
      router.navigate(['/e-shop']);
    }
  }

  ngOnInit(): void {
    this.onLoginForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),
      ])],
      password: ['', Validators.compose([
        Validators.required,
      ])]
    });
  }

  signUp() {
    this.router.navigate(['/signup']);
  }

  adminLogin() {
    this.dataHelper.displayLoading = true;
    const email = this.onLoginForm.value['email'];
    const password = this.onLoginForm.value['password'];
    this.userAuth.loginUser({ email, password })
      .then((data) => {
        if (data) {
          const urlPath = `admins/${data.user.uid}`;
          this.getUserData(urlPath);
        }
      });
  }

  loginAccount(formData: any) {
    this.dataHelper.displayLoading = true;
    this.userAuth.loginUser(formData)
      .then((data) => {
        if (data) {
          const urlPath = `users/${data.user.uid}`;
          this.getUserData(urlPath);
        }
      });
  }

  getUserData(urlPath: string) {
    this.dataHelper.getFirebaseData(urlPath)
      .then((snapshot: any) => {
        const user: iUser = snapshot.val() ?? new iUser();
        if (user) {
          this.userAuth.setUser(user);
          this.toastr.success('Logged In');
          this.router.navigate(['/e-shop']);
          this.dataHelper.displayLoading = false;
        } else {
          this.toastr.error('User not authenticated or blocked by admin!');
          this.userAuth.logoutUser();
        }
      });
  }

}
