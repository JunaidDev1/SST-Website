import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TeamComponent } from './components/team/team.component';
import { EShopComponent } from './e-shop/e-shop/e-shop.component';
import { ProductsComponent } from './E-Shop/products/products/products.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { SearchfilterPipe } from './searchfilter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { CartComponent } from './E-shop/cart/cart/cart.component';
import { CheckoutComponent } from './E-shop/checkout/checkout.component';
import { CheckoutOldComponent } from './checkout-old/checkout-old.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { LoginComponent } from './credentials/login/login.component';
import { SignupComponent } from './credentials/signup/signup.component';
import { ToastrModule } from 'ngx-toastr';
import { ResetPasswordComponent } from './credentials/reset-password/reset-password.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from 'ngx-loading';
import { AddProductComponent } from './sharedComponents/add-product/add-product.component';
import { MyOrdersComponent } from './E-Shop/my-orders/my-orders.component';
import { DeleteModalComponent } from './sharedComponents/delete-modal/delete-modal.component';
import { ChangePasswordComponent } from './credentials/change-password/change-password.component';
import { MyProductsComponent } from './E-Shop/my-products/my-products.component';
import { ProductDetailComponent } from './E-Shop/product-detail/product-detail.component';
import { OrderDetailComponent } from './E-Shop/order-detail/order-detail.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    ProjectsComponent,
    OurTeamComponent,
    ContactUsComponent,
    TeamComponent,
    EShopComponent,
    ProductsComponent,
    SearchfilterPipe,
    CartComponent,
    CheckoutComponent,
    CheckoutOldComponent,
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent,
    AddProductComponent,
    MyOrdersComponent,
    DeleteModalComponent,
    ChangePasswordComponent,
    MyProductsComponent,
    ProductDetailComponent,
    OrderDetailComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    NgxPayPalModule,
    HttpClientModule,
    ToastrModule.forRoot(
      {
        positionClass: 'toast-top-right',
        closeButton: true,
        progressBar: true,
        timeOut: 4000,
        preventDuplicates: true,
      }
    ),
    NgxUiLoaderModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.threeBounce,
      backdropBorderRadius: "4px",
      primaryColour: "#ffffff",
      secondaryColour: "#ffffff",
      tertiaryColour: "#ffffff",
      fullScreenBackdrop: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
