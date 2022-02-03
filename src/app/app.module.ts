import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { ServicesComponent } from './template/services/services.component';
import { FooterComponent } from './template/footer/footer.component';
import { TeamComponent } from './template/team/team.component';
import { TestimonialComponent } from './template/testimonial/testimonial.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesComponent,
    FooterComponent,
    TeamComponent,
    TestimonialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
