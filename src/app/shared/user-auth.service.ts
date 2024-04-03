import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { iUser } from '../shared/user';
import { ApiService } from './api.service';
import { DataHelperService } from '../data-helper.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  currentUser: iUser = new iUser();
  userImagePlaceholder = '/assets/icons/person-circle.svg';

  constructor(
    public router: Router,
    public apiService: ApiService,
    private firebaseDb: AngularFireDatabase,
    private firebaseAuth: AngularFireAuth,
    public dataHelper: DataHelperService
  ) {
    if (localStorage.getItem('uid')) {
      const user = localStorage.getItem('userData');
      this.currentUser = user ? JSON.parse(user) : new iUser();
      this.getCurrentUser();
    }
  }

  getCurrentUser() {
    const uid = localStorage.getItem('uid');
    this.firebaseDb.database.ref().child(`/users/${uid}`)
      .on('value', (snapshot) => {
        this.currentUser = snapshot?.val() ?? {};
        if (this.currentUser.uid) {
          localStorage.setItem('userData', JSON.stringify(this.currentUser));
        } else {
          localStorage.clear();
          this.currentUser = new iUser();
        }
      });
  }

  setUser(user: iUser) {
    localStorage.setItem('uid', user.uid);
    localStorage.setItem('userLoggedIn', 'true');
    localStorage.setItem('userData', JSON.stringify(user));
    this.currentUser = user;
    // this.dataHelper.fetchAllData();
  }

  loginUsers(email: string, password: string): Promise<any> {
    return this.firebaseAuth.signInWithEmailAndPassword(email, password);
  }

  async updatePassword(password: string): Promise<Promise<any> | null> {
    const user = this.firebaseAuth.currentUser;
    return user && (await user).updatePassword(password);
  }

  signupUser(email: string, password: string): Promise<any> {
    return this.firebaseAuth.createUserWithEmailAndPassword(email, password);
  }

  logoutUser() {
    this.firebaseAuth.signOut().then(() => {
      this.dataHelper.displayLoading = false;
      localStorage.clear();
      this.currentUser = new iUser();
      this.router.navigate(['/login']);
    });
  }

  async loginUser(formData: any): Promise<any> {
    try {
      const user = await this.firebaseAuth
        .signInWithEmailAndPassword(formData.email, formData.password);
      return user;
    } catch (e: any) {
      this.dataHelper.displayLoading = false;
      alert('Invalid login credentials!');
    }
  }

}
