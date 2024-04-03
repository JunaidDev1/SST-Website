import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { iUser } from 'src/app/shared/user';
import { ApiService } from 'src/app/shared/api.service';
import { UserAuthService } from 'src/app/shared/user-auth.service';
import { DataHelperService } from 'src/app/data-helper.service';

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
    public dataHelper: DataHelperService
  ) { }

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

  loginAccount(formData: any) {
    this.dataHelper.displayLoading = true;
    this.userAuth.loginUser(formData)
      .then((data) => {
        if (data) {
          this.getUserData(data.user.uid);
        }
      });
  }

  getUserData(uid: string) {
    const urlPath = `users/${uid}`;
    this.apiService.getFirebaseData(urlPath)
      .then((snapshot: any) => {
        const user = snapshot.val();
        if (user) {
          if (!user.isDeleted) {
            this.userAuth.setUser(user);
            alert('Logged In');
            this.router.navigate(['/e-shop']);
          } else {
            alert('User not authenticated or blocked by admin!');
            this.dataHelper.displayLoading = false;
          }
        } else {
          this.userAuth.logoutUser();
        }
      });
  }

}
