import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { EShopComponent } from './e-shop/e-shop/e-shop.component';
import { CartComponent } from './E-shop/cart/cart/cart.component';
import { CheckoutComponent } from './E-shop/checkout/checkout.component';
import { CheckoutOldComponent } from './checkout-old/checkout-old.component';
import { LoginComponent } from './credentials/login/login.component';
import { SignupComponent } from './credentials/signup/signup.component';
import { ResetPasswordComponent } from './credentials/reset-password/reset-password.component';
import { MyOrdersComponent } from './E-Shop/my-orders/my-orders.component';
import { ChangePasswordComponent } from './credentials/change-password/change-password.component';
import { MyProductsComponent } from './E-Shop/my-products/my-products.component';
import { ProductDetailComponent } from './E-Shop/product-detail/product-detail.component';
import { OrderDetailComponent } from './E-Shop/order-detail/order-detail.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  { path: 'e-shop', component: EShopComponent },
  { path: 'my-products', component: MyProductsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'our-team', component: OurTeamComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'order-detail', component: OrderDetailComponent },
  { path: 'checkout-old', component: CheckoutOldComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'my-orders', component: MyOrdersComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: '**', redirectTo: '/e-shop', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
