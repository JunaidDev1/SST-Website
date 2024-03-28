import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { BehaviorSubject, Observable } from 'rxjs';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { productData } from './products.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private productId = new BehaviorSubject<string>('');
  productId$ = this.productId.asObservable();
  cartItems: any[] = [];
  taxesFee = 2.98;

  constructor(
    private firebaseDb: AngularFireDatabase,
    private ngxService: NgxUiLoaderService,
    private http: HttpClient
  ) { }

  getProducts(): Observable<any[]> {
    return this.firebaseDb.list('Product').valueChanges();
  }
  addProduct(productObject: productData) {
    // debugger
    const customId = this.generateCustomId(productObject.price);
    productObject.id = customId;
    this.firebaseDb.object('Product/' + customId).set(productObject);
    // Notify about the new product
    this.firebaseDb.list('Product-Notifications').push({ type: 'newProduct', productId: customId });
  }
  deleteProduct(productIndexId: any) {
    this.firebaseDb.object('Product/' + productIndexId).remove();
  }
  updateProduct(productObject: any, id: any) {
    this.firebaseDb.object('Product/' + id).update(productObject);
  }
  getProductById(productId: string): Observable<any> {
    return this.firebaseDb.object('Product/' + productId).valueChanges();
  }
  setProductId(id: any) {
    this.productId.next(id);
  }
  getNewProductAdded(): Observable<any> {
    return this.firebaseDb.list('Product-Notifications').valueChanges();
  }
  ngxServiceLoader() {
    this.ngxService.start();
    setTimeout(() => {
      this.ngxService.stop();
    }, 2000);
  }
  generateCustomId(prefix: string = 'custom'): string {
    const timestamp = new Date().getTime().toString(16);
    const random = Math.floor(Math.random() * 1000000).toString(16);
    const uniqueId = `${prefix}_${timestamp}_${random}`;
    return uniqueId;
  }

  addToCart(product: productData) {
    const existingItem = this.getCartItems().find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      const newItem = { ...product, quantity: 1 };
      this.cartItems.push(newItem);
    }
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  getCartItems() {
    const items = localStorage.getItem('cartItems');
    this.cartItems = items ? JSON.parse(items) : [];
    return this.cartItems;
  }

  getCartItemsCount(): number {
    return this.getCartItems().reduce((total, item) => total + item.quantity, 0);
  }

  getOneItemTotalPrice(item: any): number {
    return item.price * item.quantity;
  }

  getSubTotal(): number {
    let sum = 0;
    this.cartItems.forEach(x => {
      sum += this.getOneItemTotalPrice(x);
    });
    return sum;
  }

  clearCart() {
    localStorage.removeItem('cartItems');
  }

  removeFromCart(item: any): void {
    const index = this.getCartItems().findIndex(cartItem => cartItem.id === item.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
  }

  removeOneFromCart(item: any): void {
    const index = this.getCartItems().findIndex(cartItem => cartItem.id === item.id);
    if (index !== -1) {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity--;
      } else {
        this.cartItems.splice(index, 1);
      }
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
  }

  processCheckout(checkoutData: any): Observable<any> {
    const checkoutUrl = ''; // junaid bhai  need to write api for payment method.
    return this.http.post(checkoutUrl, checkoutData);
  }

}
