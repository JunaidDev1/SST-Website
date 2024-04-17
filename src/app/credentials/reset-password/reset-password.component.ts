import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataHelperService } from 'src/app/data-helper.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  email: string;

  constructor(
    public dataHelper: DataHelperService,
    public firebaseAuth: AngularFireAuth,
    public router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  resetPassword() {
    const self = this;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const showError = !re.test(String(self.email).toLowerCase());
    if (showError) {
      this.toastr.error('Invalid email pattern!');
      return;
    }
    self.dataHelper.displayLoading = true;
    self.firebaseAuth.sendPasswordResetEmail(self.email)
      .then(() => {
        self.dataHelper.displayLoading = false;
        this.toastr.success('Click the link sent in the email and follow the instructions!');
        self.router.navigate(['/login']);
      })
      .catch((e) => {
        self.dataHelper.displayLoading = false;
        this.toastr.error('This email address is not registered!');
      });
  }

}