import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataHelperService } from 'src/app/data-helper.service';
import { ApiService } from 'src/app/shared/api.service';
import { iUser } from 'src/app/shared/user';
import { UserAuthService } from 'src/app/shared/user-auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  onRegisterForm: any = FormGroup;
  user: iUser = new iUser();
  sellerUid: string;
  inviteCode: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dataHelper: DataHelperService,
    public apiService: ApiService,
    public userAuth: UserAuthService,
    public firebaseAuth: AngularFireAuth,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.onRegisterForm = this.fb.group({
      firstName: ['', Validators.compose([
        Validators.required
      ])],
      lastName: ['', Validators.compose([
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),
      ])],
      password: ['', Validators.compose([
        Validators.required,
      ])],
      cPassword: ['', Validators.compose([
        Validators.required
      ])],
    });
  }

  createAccount(data: any) {
    const self = this;
    if (data.password !== data.cPassword) {
      this.toastr.error('Password mismatch!');
    }

    self.dataHelper.displayLoading = true;
    self.userAuth.signupUser(data.email, data.password)
      .then(async (user) => {
        if (user) {
          const currentUser = self.firebaseAuth.currentUser;
          if (currentUser) {
            data.uid = (await currentUser).uid;
            self.saveDatatoUserTableAfterRegister(data);
          } else {
            this.toastr.error('User not authenticated!');
          }
        }
      })
      .catch((error) => {
        self.dataHelper.displayLoading = false;
        this.toastr.error('Error, there is an issue with account creation!');
      });
  }

  saveDatatoUserTableAfterRegister(data: any) {
    const self = this;
    data.password = null;
    data.cPassword = null;
    data.createdOn = Number(new Date());
    const urlPath = `users/${data.uid}`;
    self.dataHelper.updateDataOnFirebase(urlPath, data)
      .then(() => {
        self.userAuth.setUser(data);
        self.dataHelper.displayLoading = false;
        self.router.navigate(['/e-shop']);
        this.toastr.success('Account authenticated successfully!');
      });
  }

}