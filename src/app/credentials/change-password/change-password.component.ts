import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataHelperService } from 'src/app/data-helper.service';
import { iUser } from 'src/app/shared/user';
import { UserAuthService } from 'src/app/shared/user-auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

  currentPassword = '';
  newPassword = '';
  confirmNewPassword = '';

  constructor(
    public router: Router,
    public toastr: ToastrService,
    public userAuth: UserAuthService,
    public dataHelper: DataHelperService,
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('userLoggedIn') !== 'true') {
      this.router.navigate(['/login']);
    }
  }

  updatePassword() {
    if (this.newPassword !== this.confirmNewPassword) {
      this.toastr.error('Password mismatch!');
      return;
    }

    const self = this;
    self.dataHelper.displayLoading = true;
    const user: iUser = this.userAuth.currentUser;
    const data = {
      email: user.email,
      password: self.currentPassword
    };

    self.userAuth.loginUser(data)
      .then((firebaseUser) => {
        if (firebaseUser) {
          self.userAuth.updatePassword(self.newPassword)?.then(() => {
            self.dataHelper.displayLoading = false;
            self.toastr.success('Password updated successfully!');
            self.userAuth.logoutUser();
          })
            .catch((e: any) => {
              self.toastr.error(e.message);
            });
        }
      })
      .catch((e) => {
        self.toastr.error(e.message);
      });
  }

}
