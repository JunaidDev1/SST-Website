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
    CheckoutOldComponent
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
    NgxUiLoaderModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
